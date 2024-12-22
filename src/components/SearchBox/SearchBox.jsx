import css from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchContainer}>
      <p>Search by name</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}