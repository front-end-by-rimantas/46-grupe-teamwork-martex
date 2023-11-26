import { useState } from "react";
import style from "./ReviewsCarousel.module.css";

export function ReviewsCarousel() {
  const slides = [
    {
      id: "1",
      text: "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla, molestias repellat sed modi illo quo dolorum voluptas impedit soluta aut iure eligendi, autem tempora blanditiis fugit magni maxime ipsam?",
    },
    {
      id: "2",
      text: "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla, molestias repellat sed modi illo quo dolorum voluptas impedit soluta aut iure eligendi, autem tempora blanditiis fugit magni maxime ipsam?",
    },
    {
      id: "3",
      text: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla, molestias repellat sed modi illo quo dolorum voluptas impedit soluta aut iure eligendi, autem tempora blanditiis fugit magni maxime ipsam?",
    },
    {
      id: "4",
      text: "4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla, molestias repellat sed modi illo quo dolorum voluptas impedit soluta aut iure eligendi, autem tempora blanditiis fugit magni maxime ipsam?",
    },
    {
      id: "5",
      text: "5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla, molestias repellat sed modi illo quo dolorum voluptas impedit soluta aut iure eligendi, autem tempora blanditiis fugit magni maxime ipsam?",
    },
    {
      id: "6",
      text: "6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla, molestias repellat sed modi illo quo dolorum voluptas impedit soluta aut iure eligendi, autem tempora blanditiis fugit magni maxime ipsam?",
    },
  ];

  const [last, setLast] = useState(slides);

  function handlePrev() {
    const lastItem = last.pop();
    setLast((prev) => [lastItem, ...prev]);
  }

  function handleNext() {
    const lastItem = last.shift();
    setLast((prev) => [...prev, lastItem]);
  }

  return (
    <div className={style.container}>
      <div className={style.carouselContainer}>
        <div type="submit" onClick={handlePrev}>
          {"<"}
        </div>
        <div>{last[0].text}</div>
        <div>{last[1].text}</div>
        <div>{last[2].text}</div>
        <div type="submit" onClick={handleNext}>
          {">"}
        </div>
      </div>
    </div>
  );
}
