import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import style from "./Card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card({ title, original_title, original_name, original_language, image, vote, name }) {
  const { fetchFilms } = useContext(GlobalContext)
  const star = Math.round(vote / 2)
  let arrayStar = []

  for (let i = 0; i < star; i++) {
    arrayStar.push(<FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />)
  }


  return (
    <div >
      {/* <img src={`https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`} alt="" /> */}
      <div className={style.card}>
        <h3>{title}</h3>
        <div>
          <p>{original_language}</p>
        </div>
        <div>
          <p>{original_title}</p>
        </div>
        <div>
          {arrayStar}
        </div>
      </div>



    </div>
  )
}

