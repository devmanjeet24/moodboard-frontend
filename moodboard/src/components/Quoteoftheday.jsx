import React, { useEffect, useState } from "react";

const Quoteoftheday = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"))
      .then((res) => res.json())
      .then((data) => {
        const parsed = JSON.parse(data.contents);
        setQuote(`${parsed[0].q} — ${parsed[0].a}`);
      });
  }, []);

  return (
    <div className="p-4 italic text-center text-gray-700">
      {quote ? `“${quote}”` : "Loading..."}
    </div>
  );
};

export default Quoteoftheday;
