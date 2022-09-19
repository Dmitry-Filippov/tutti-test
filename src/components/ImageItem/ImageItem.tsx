import { Image } from "../App/App";
import "./ImageItem.css";

interface Props extends Image {
  setPopUpImage: Function;
}

const ImageItem = ({ link, id, comments, setPopUpImage }: Props) => {
  return (
    <li
      className="image-item"
      onClick={() => {
        setPopUpImage({ link, id, comments });
      }}
    >
      <img src={link} alt="instrument" className="image-item__image" />
    </li>
  );
};

export default ImageItem;
