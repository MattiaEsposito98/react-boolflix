import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import style from "./Card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card({ title, original_title, original_language, image, vote }) {
  const { fetchFilms } = useContext(GlobalContext)
  const star = Math.round(vote / 2)
  console.log(star)
  let arrayStar = []
  console.log("array", arrayStar)

  for (let i = 0; i < star; i++) {
    arrayStar.push(<FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />)
  }


  return (
    <div className={style.card}>
      {/* <img src={`https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`} alt="" /> */}
      <p>{title}</p>
      <p>{original_language}</p>
      <p>{original_title}</p>
      <div>
        {arrayStar}
      </div>


    </div>
  )
}

