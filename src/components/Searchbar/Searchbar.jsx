import React, { useState } from 'react';
import css from './Searchbar.module.css';
// import { useState } from 'react';

export function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  // const API = '34903513-476090311f5800fa8542a8b0c';

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.input.value);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit" className={css.button}>
          <span className="button-label">Search</span>
        </button>
      </form>
    </header>
  );
}
