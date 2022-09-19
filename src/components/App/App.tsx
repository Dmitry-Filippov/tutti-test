import { useEffect, useState } from "react";
import "./App.css";
import { getImages } from "../../api/api";
import ImageItem from "../ImageItem/ImageItem";
import PopUp from "../PopUp/PopUp";

export interface Image {
  link: string;
  id: number;
  comments: Comment[];
}

interface Comment {
  text: string;
  id: number;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [popUpImage, setPopUpImage] = useState<Image | null>(null);

  useEffect(() => {
    getImages().then((res) => {
      setImages(res);
    });
  }, []);

  return (
    <div className="app">
      <ul className="app__images">
        {images.map((image) => {
          return (
            <ImageItem
              link={image.link}
              key={image.id}
              id={image.id}
              comments={image.comments}
              setPopUpImage={setPopUpImage}
            />
          );
        })}
      </ul>
      {popUpImage ? (
        <PopUp
          link={popUpImage.link}
          id={popUpImage.id}
          comments={popUpImage.comments}
          setPopUpImage={setPopUpImage}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
