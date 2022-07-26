import React, { useState } from "react";
import styles from "./Search.module.css";
import replaceSpace from "../../helpers/replaceSpace";

function Search({ setSearchParams, setPage, setIsLoadingMore }) {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filterInput = replaceSpace(input);

    if (filterInput) {
      setPage(1);
      setIsLoadingMore(true);
      setSearchParams({ beers: filterInput });
    }
    setInput("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.search}
          value={input}
          type="text"
          name="Search for a beers…"
          placeholder="Search for a beers…"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit" className={styles.button}>
          search
        </button>
      </form>
    </div>
  );
}

export default Search;
