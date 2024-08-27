import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";
const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = parseInt(count);
    setText(data.slice(0, amount));
    console.log(text);
  };

  return (
    <section className="section-center">
      <h4 style={{ marginBottom: "2rem" }}> tired of boring lorem ipsum?</h4>
      <h4>Generate unique paragraph from below</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Number of Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min={1}
          max={8}
          step={1}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
