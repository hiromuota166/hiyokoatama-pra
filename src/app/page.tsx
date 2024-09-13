'use client';
import { useEffect } from "react";
import { requestPermission } from "../messaging_init_in_sw";

export default function Home() {
  useEffect(() => {
    console.log("呼んだ？");
    requestPermission();
  }, []);
  return (
    <div>
      <h1>こんにちは!!!神宮111</h1>
    </div>
  );
}
