import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [text_to_search, set_text_to_search] = useState("");
  const [result, setResult] = useState("");
  async function onSubmit(event: any) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: text_to_search }),
      });
      const data = await response.json();
      console.log(data);
      setResult(data.result);
    } catch (error) {
      console.log(error);
    }

    //setAnimalInput("");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="animal"
          placeholder="Enter anything"
          value={text_to_search}
          onChange={(e) => set_text_to_search(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Generate Information
        </button>
      </form>
      <div>{result}</div>
    </div>
  );
}
