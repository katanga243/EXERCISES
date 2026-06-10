import { useState } from "react";
import useSWR from "swr";

const BOT_ENDPOINT = "https://mocki.io/v1/c58b0671-179a-4e8c-a28b-0ee620e338b2";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [shouldFetch, setShouldFetch] = useState(null);

  useSWR(shouldFetch, fetcher, {
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data?.reply ?? "..." },
      ]);
      setShouldFetch(null);
    },
  });

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");
    setShouldFetch(BOT_ENDPOINT);
  };

  return (
    <div className="chat-app">
      <h1>Chat with SWR bot</h1>
      <ul className="messages">
        {messages.map((m, i) => (
          <li key={i} className={m.from}>
            <strong>{m.from}:</strong> {m.text}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSend}>
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
