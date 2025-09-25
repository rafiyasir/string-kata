import { useState } from "react";
import './App.css'

export default function StringKata() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");


  const handleSubmit = async () => {
    if (!query.trim()) {
      setResult("Please add your string");
      return;
    }

    try {
      const res = await fetch(`/api/sum?str=${query}`);
      const data = await res.json();
      setResult(JSON.stringify(data));
    } catch (err) {
      if (err instanceof Error) {
        setResult(`Error: ${err.message}`);
      }
    }
  };

  return (
    <main>
      <h2>String Kata</h2>
      <p>
        <label htmlFor="strQuery">Enter Your String</label>
        <input
        id="strQurey"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="1,2"
      />
      </p>
      <button
        onClick={handleSubmit}
      >
        Get the Sum
      </button>
      <p>
        {result}
      </p>
    </main>
  );
}
