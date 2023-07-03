import s from "./header.module.css";
import logo from "../../images/logo.png";
import Burger from "../Burger/Burger";

export default function Header() {
  return (
    <header>
      <a href="#">
        <img className={s.logo} src={logo} alt="logo" />
      </a>
      <div className={s.container}>
        <a className={s.link} href="#">
          Sådan fungere det
        </a>
        <button className={s.btn} type="button">
          FÅ 3 Tilbud
        </button>
        <Burger />
      </div>
    </header>
  );
}
