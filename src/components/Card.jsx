import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import style from "./Card.module.css";

export default function Card({ title, original_title, original_language, image, vote, }) {
  const star = Math.round(vote / 2);
  let arrayStar = [];

  for (let i = 0; i < star; i++) {
    arrayStar.push(<FontAwesomeIcon icon={faStar} style={{ color: "gold" }} key={i} />);
  }

  return (
    <div className={style.card}>
      <img className={style.imageBackground} src={image} />
      <div className={style.cardHover}>
        <h3>{title}</h3>
        <div>
          <span>{original_language}</span>
        </div>
        <div>
          <span>{original_title}</span>
        </div>
        <div className={style.star}>
          {arrayStar}
        </div>
      </div>
    </div>
  );
}
