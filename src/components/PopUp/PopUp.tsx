import { useState } from "react";
import { Image } from "../App/App";
import "./PopUp.css";

interface Props extends Image {
  setPopUpImage: Function;
}

const PopUp = ({ link, comments, setPopUpImage }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div
      className="pop-up"
      onClick={(e) => {
        if ((e.target as Element).className === "pop-up") {
          setPopUpImage(null);
        }
      }}
    >
      <div className="pop-up__wrapper">
        <img src={link} alt="instrument" className="pop-up__image" />
        <div className="pop-up__comments">
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p className="pop-up__comment">{comment.text}</p>
                </li>
              );
            })}
            {comments.length === 0 ? (
              <li>
                <p className="pop-up__comment">Комментариев еще нет</p>
              </li>
            ) : (
              <></>
            )}
          </ul>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              comments.push({
                text: inputValue,
                id: Math.random(),
              });
              setInputValue("");
            }}
          >
            <span className="pop-up__span" >Добавить комментарий</span>
            <input
              className="pop-up__input"
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
