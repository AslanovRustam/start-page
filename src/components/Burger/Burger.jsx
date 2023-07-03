import { useState } from "react";
import s from "./burger.module.css";

export default function Burger() {
  const [showModal, setShowmodal] = useState(false);

  const togleModal = () => {
    setShowmodal(!showModal);
  };

  return (
    <div className={s.menu} onClick={togleModal}>
      <div className={`${s.items} ${showModal && s.active}`}>
        <div className={s.item}></div>
        <div className={s.item}></div>
        <div className={s.item}></div>
      </div>
    </div>
  );
}
