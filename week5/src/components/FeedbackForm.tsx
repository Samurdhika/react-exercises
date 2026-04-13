import { useState } from "react";
import { sendFeedback } from "../services/api";

export default function FeedbackForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseId, setResponseId] = useState<number | null>(null);

  const submitFeedback = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const data = await sendFeedback(title, message);
      setResponseId(data.id);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">
      {!isSubmitted ? (
        <form onSubmit={submitFeedback} className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-center">
            Give Feedback
          </h2>

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-bold transition">
            Submit Feedback
          </button>
        </form>
      ) : (
        <div className="bg-green-100 border border-green-300 p-6 rounded-xl text-center">
          <h2 className="text-green-700 font-bold text-lg">
            Thank you for your feedback!
          </h2>
          <p className="text-green-600">
            Your message was saved with ID: {responseId}
          </p>
        </div>
      )}
    </div>
  );
}