import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import style from "./Card.module.css"

export default function Card({ title, original_title, original_language, image, vote }) {

  const { fetchFilms } = useContext(GlobalContext)


  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.col}>
          <div className={style.card}>
            {/* <img src={`https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`} alt="" /> */}
            <p>{title}</p>
            <p>{original_language}</p>
            <p>{original_title}</p>
            <p>{vote}</p>
          </div>
        </div>
      </div>
    </div>
  )
}