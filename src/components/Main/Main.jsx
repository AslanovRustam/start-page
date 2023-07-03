import s from "./main.module.css";
import starLogo from "../../images/starLogo.png";
import stars from "../../images/stars.png";
import check from "../../images/check.png";

export default function Main() {
  return (
    <main>
      <div className={s.container}>
        <img className={s.starsLogo} src={starLogo} alt="stars logo" />
        <img className={s.stars} src={stars} alt="stars" />
        <h1 className={s.title}>SKAL BILEN SKROTTES?</h1>
        <p className={s.subTitle}>
          Med mere end 40 skrothandlere i vores database, står vi klar til at
          indhente det bedste tilbud til dig.
        </p>
        <ul className={s.list}>
          <li className={s.item}>
            <img className={s.icon} src={check} alt="icon" />{" "}
            <p className={s.text}>
              Få <span>3 tilbud</span> for din gamle bil
            </p>
          </li>{" "}
          <li className={s.item}>
            <img className={s.icon} src={check} alt="icon" />
            <p className={s.text}>
              {" "}
              Du får tilbuddet indenfor <span>24 timer</span>
            </p>
          </li>{" "}
          <li className={s.item}>
            <img className={s.icon} src={check} alt="icon" />{" "}
            <p className={s.text}>
              Vi dækker <span>hele Danmark</span>
            </p>
          </li>{" "}
          <li className={s.item}>
            <img className={s.icon} src={check} alt="icon" />{" "}
            <p className={s.text}>
              Få op til <span>40% mere</span> for din bil
            </p>
          </li>{" "}
          <li className={s.item}>
            <img className={s.icon} src={check} alt="icon" />{" "}
            <p className={s.text}>
              Priser op til <span>DKK 15.000,-</span>
            </p>
          </li>
          <li className={s.item}>
            <img className={s.icon} src={check} alt="icon" />{" "}
            <p className={s.text}>
              Det er <span>GRATIS</span>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
