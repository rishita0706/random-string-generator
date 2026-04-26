import { useState, useCallback, useEffect } from 'react'
import { Copy } from "lucide-react";
import '../index.css'

import { Link } from "react-router-dom";


function Generator() {
  const [length, setLength] = useState(8);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generated, setGenerated] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);

  const generateString = useCallback(() => {
    let chars = "";

    if (includeUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+";

    if (chars === "") {
      setGenerated("Select at least one option");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }

    setGenerated(result);
  }, [length, includeUpper, includeLower, includeNumbers, includeSymbols]);

  useEffect(() => {
  if (firstLoad) {
    generateString();
    setFirstLoad(false);
  }
  }, [generateString, firstLoad]);

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#dbeafe] to-[#93c5fd] flex items-center justify-center p-6">
    {/* CARD */}
    <div className="w-full max-w-md space-y-6 bg-white/60 shadow-2xl backdrop-blur-lg border border-white/50 rounded-2xl p-6 shadow-xl">

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center text-[#1e3a8a]">
        Random String Generator
      </h1>

      {/* LENGTH */}
      <div>
        <label className="text-[#1e3a8a] font-medium">
          Length: {length}
        </label>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full mt-2 accent-[#2563eb]"
        />
      </div>

      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-3 text-[#1e293b] text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} />
          Uppercase
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} />
          Lowercase
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
          Numbers
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} />
          Symbols
        </label>
      </div>

      {/* OUTPUT */}
      <div className="relative p-4 rounded-xl bg-white/70 backdrop-blur-lg border border-white/60 min-h-[80px] text-[#1e293b]">

        {generated || (
          <p className="text-center text-[#1e3a8a]/60">
            Click generate to create a string
          </p>
        )}

        {/* COPY */}
        {generated && (
          <button
            onClick={() => navigator.clipboard.writeText(generated)}
            className="absolute bottom-2 right-2 text-[#2563eb] hover:scale-110 transition"
          >
            <Copy size={18} />
          </button>
        )}
      </div>

      {/* BUTTON */}
      <button
        onClick={generateString}
        className="w-full py-3 rounded-xl bg-[#2563eb] text-white font-semibold 
        hover:bg-[#1e40af] hover:shadow-xl transition duration-300"
      >
        Generate
      </button>

    </div>

    <p className="fixed bottom-4 right-4 text-sm text-[#976D61]/70">
          Built with ❤️ by Rishita
    </p>
  </div>
);
}

export default Generator
