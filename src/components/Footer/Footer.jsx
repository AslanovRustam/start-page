import { useState } from "react";
import s from "./footer.module.css";
import arrow from "../../images/arrow.png";
import search from "../../images/search.png";
import number from "../../images/number.png";

export default function Footer() {
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = () => {
    console.log("inputSearch", inputSearch);
    setInputSearch("");
  };
  return (
    <footer>
      <img className={s.arrow} src={arrow} alt="arrow icon" />
      <div className={s.container}>
        <p className={s.subtitle}>Indtast nummerplade</p>
        <div className={s.inputContainer}>
          <img className={s.number} src={number} alt="number icon" />
          <input
            className={s.input}
            placeholder="Registration number"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button type="button" className={s.btn} onClick={handleSubmit}>
            <img className={s.search} src={search} alt="search icon" />
          </button>
        </div>
      </div>
    </footer>
  );
}
