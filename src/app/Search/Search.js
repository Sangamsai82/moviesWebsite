"use client";
import styles from './Search.module.css'

const Search = () => {

  return (
    <div className={styles.container}>
      <form className={styles.search}>
        <input
          className={styles.input}
          type="search"
          placeholder="Search for Movie Title..."
        />
      </form>
    </div>
  );
};

export default Search;
