import React, { useState } from "react";

export default function StringKata() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  // Dynamic base URL
  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://string-kata.up.railway.app"
      : "http://localhost:3000";

  const handleFetch = async () => {
    if (!query.trim()) {
      setResult("⚠️ Please enter a query (e.g., ?str=1,2)");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/api/sum?str=${query}`);
      const data = await res.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setResult(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-2">String Kata Sum</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="?str=1,2"
        className="w-full border p-2 rounded mb-3"
      />

      <button
        onClick={handleFetch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Get Result
      </button>

      <pre className="mt-4 bg-gray-100 p-3 rounded text-sm overflow-x-auto">
        {result || "Result will appear here..."}
      </pre>
    </div>
  );
}
