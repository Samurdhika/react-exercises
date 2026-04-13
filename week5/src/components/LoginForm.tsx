import { useState } from "react";
import { loginUser } from "../services/api";

type Props = {
  onLogin: (token: string) => void;
};

export default function LoginForm({ onLogin }: Props) {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(username, password);
      localStorage.setItem("my_real_token", data.accessToken);
      onLogin(data.accessToken);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <p className="text-gray-500 text-sm text-center">
        Log in to access the feedback form.
      </p>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {error && (
        <p className="text-red-500 text-sm font-semibold">{error}</p>
      )}

      <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-bold transition">
        Log In
      </button>
    </form>
  );
}