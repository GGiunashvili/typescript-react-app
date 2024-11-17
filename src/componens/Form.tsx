import React, { useState, FormEvent } from "react";

export default function Form() {
  const [answer, setAnswer] = useState<string>(""); // პასუხის შესანახად
  const [error, setError] = useState<string | undefined>(undefined); // შეცდომის შესანახად
  const [state, setState] = useState<"typing" | "submitting" | "success">(
    "typing"
  ); // ფორმის სტატუსი
  const [mood, setMood] = useState<string>("Bad Mood"); // განწყობის შესანახად

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // ფორმის დეფოლტ ქმედების შეჩერება
    setState("submitting"); // ფორმის სტატუსი იცვლება
    try {
      if (answer.trim() !== "lima") {
        throw new Error("Answer cannot be empty!"); // ცარიელი პასუხის შემოწმება
      }
      setMood("Good Mood"); // სწორი პასუხისთვის განწყობის ცვლილება
      setState("success"); // წარმატების სტატუსი
      setError(undefined); // შეცდომის გასუფთავება
    } catch (err) {
      setMood("Bad Mood"); // შეცდომის დროს განწყობა
      setState("typing"); // სტატუსი უბრუნდება `typing`-ს
      setError((err as Error).message); // შეცდომის შეტანა
    }
  }

  function handleAnswer(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswer(e.target.value); // პასუხის განახლება ტექსტარედან
  }

  return (
    <div>
      <h1>{mood}</h1> {/* განწყობის ჩვენება */}
      <form onSubmit={handleSubmit}>
        {" "}
        {/* onSubmit გამოიყენება onClick-ის ნაცვლად */}
        <textarea
          value={answer}
          onChange={handleAnswer}
          disabled={state === "submitting"} // ტექსტარე დაბლოკილია სუბმიტის დროს
        ></textarea>
        <button
          style={{
            background:
              answer.length === 0 || state === "submitting" ? "gray" : "red", // ფონის ფერი
            color: "white",
            cursor:
              answer.length === 0 || state === "submitting"
                ? "not-allowed"
                : "pointer", // კურსორის ცვლილება
          }}
          disabled={answer.length === 0 || state === "submitting"} // ღილაკი დაბლოკილია საჭიროებისამებრ
        >
          Submit
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* შეცდომის ჩვენება */}
    </div>
  );
}
