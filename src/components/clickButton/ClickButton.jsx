import "./clickButton.style.css";
import belImg from "../img/1pic.jpg";
import foxImg from "../img/2pic.jpg";
import lionImg from "../img/3pic.jpg";
import tigerImg from "../img/4pic.jpg";
import elpfImg from "../img/5pic.jpg";
import kangImg from "../img/6pic.jpg";
import { useState } from "react";

const animalsImages = [
  {
    name: "belka",
        src: belImg,
        alt: "Belka living in the trees",
    text: "Belka is lumping around trees",
  },
  {
    name: "fox",
      src: foxImg,
      alt: "Fox is living under ground",
    text: "Fox is animal who is trying to eat rabbits",
  },
  {
    name: "lion",
      src: lionImg,
      alt: "Lion is eating other animals",
    text: "Lion is king of the savannah",
  },
  {
    name: "tiger",
      src: tigerImg,
      alt: "Tiger is stronger than lion",
    text: "Tiger is eating other animals",
  },
  {
    name: "elephant",
      src: elpfImg,
      alt: "Elephant is bigger animal",
    text: "Elephants lives in cheap indian",
  },
  {
    name: "kangaroo",
      src: kangImg,
      alt: "Kangaroo is jumping very high",
    text: "Kangaroo lives in cheap australia",
  },
];

const ClickButton = () => {
    const [currentImageInfo, setCurrentImageInfo] = useState("");

    const onImageClick = (e) => {
        const {accessKey } = e.target;
        setCurrentImageInfo(animalsImages[accessKey].text);
    }

    const showAllImages = animalsImages.map((animal, index)=> {
        return (
            <img
                accessKey={index}
                src={animal.src}
                name={animal.name}
                key={index}
                alt={animal.alt}
                onClick={onImageClick}
            />
        )
    })

    return (
        <div>
            {showAllImages}
            <p>{currentImageInfo}</p>
        {/* <img src={belImg} onClick={belHandler} />
        {showText && <p>this is Belka</p>} */}
      </div>
    );
}

export default ClickButton;