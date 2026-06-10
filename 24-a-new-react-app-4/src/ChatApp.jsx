import { useState } from "react";
import useSWR from "swr";

// Mock endpoint created on mocki.io. Returns JSON like: { "reply": "..." }
const BOT_ENDPOINT = "https://mocki.io/v1/c58b0671-179a-4e8c-a28b-0ee620e338b2";

// Fetcher used by SWR: throws on non-OK responses so SWR can expose the error.
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status}`);
  }
  return res.json();
};

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  // When shouldFetch holds the endpoint, SWR runs; when null, the request is paused.
  const [shouldFetch, setShouldFetch] = useState(null);

  // SWR only fires the request when the key (shouldFetch) is truthy.
  // isLoading and error are used to drive the UI feedback below.
  const { isLoading, error } = useSWR(shouldFetch, fetcher, {
    revalidateOnFocus: false,
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data?.reply ?? "..." },
      ]);
      setShouldFetch(null); // reset so the next message triggers a fresh call
    },
    onError: () => {
      setShouldFetch(null); // stop retrying; the error is shown in the UI
    },
  });

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    setShouldFetch(BOT_ENDPOINT); // triggers the SWR request for the bot reply
  };

  return (
    <div className="chat-app">
      <h1>Chat with SWR bot</h1>

      <ul className="messages">
        {messages.map((message, index) => (
          <li key={index} className={message.from}>
            <strong>{message.from}:</strong> {message.text}
          </li>
        ))}
      </ul>

      {/* Loading feedback while SWR is fetching the bot reply */}
      {isLoading && <p className="status loading">Bot is typing…</p>}

      {/* Error feedback if the network call fails */}
      {error && (
        <p className="status error">
          Something went wrong while fetching the bot reply. Please try again.
        </p>
      )}

      <form onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending…" : "Send"}
        </button>
      </form>
    </div>
  );
}
