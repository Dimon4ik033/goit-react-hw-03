import css from './Contact.module.css';
import { IoIosCall } from "react-icons/io";
import { FaUser } from "react-icons/fa";

export default function Contact({ id, name, number, onDelete }) {
  return (
      <li className={css.listItem}>
          <div className={css.infContainer}>
              <p><span className={css.svgIcon}><FaUser className={css.svg} /></span>{name}</p>
            <p><span className={css.svgIcon}><IoIosCall /></span>{number}</p>
          </div>
          <button type="button" className={css.btn} onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};