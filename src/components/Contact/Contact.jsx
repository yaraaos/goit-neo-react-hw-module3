/* eslint-disable react/prop-types */
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.item}>
      <div className={css.contactInfo}>
        <p className={css.text}>
          <FaUser /> {name}
        </p>
        <p className={css.text}>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;