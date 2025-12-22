"use client";

import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("ボタンを押してね");

  const drawFortune = () => {
    const fortunes = ["大大吉", "大吉", "中吉", "小吉", "凶", "大凶"];
    const random = fortunes[Math.floor(Math.random() * fortunes.length)]; //ここでおみくじをランダムで選ぶ
    setResult(random);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontSize: "100px",
        color: "gold",
      }}
    >
      <h1>🔮 今日の運勢 🔮</h1>

      <p
        style={{
          fontSize: "110px",
          fontWeight: "bold",
          margin: "40px",
          minHeight: "60px",
          color: "red",
        }}
      >
        {result}
      </p>

      <button
        onClick={drawFortune}
        style={{
          padding: "15px 30px",
          backgroundColor: "#0070f3",
          color: "white",
          borderRadius: "10px",
          fontSize: "60px",
          border: "none",
          cursor: "pointer",
        }}
      >
        おみくじを引く
      </button>
    </div>
  );
}
