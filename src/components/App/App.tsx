import React, { useEffect, useState } from "react";
import "./App.css";
import { getImages } from "../../api/api";
import ImageItem from "../ImageItem/ImageItem";


interface Image {
  link: string;
  id: number;
  comments: string;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    getImages().then((res) => {
      console.log(res);
      setImages(res);
    });
  }, []);

  return (
    <div className="app">
      <ul className="app__images">
        {images.map((image) => {
          return <ImageItem link={image.link} key={image.id} />;
        })}
      </ul>
    </div>
  );
}

export default App;
