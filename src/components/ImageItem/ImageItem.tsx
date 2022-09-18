import "./ImageItem.css";

interface props {
  link: string;
}

const ImageItem = ({ link }: props) => {
  return (
    <li className="image-item">
      <img src={link} alt="instrument" className="image-item__image" />
    </li>
  );
};

export default ImageItem;
