import { useState } from "react";

export function CardComponent({ sequential, children, imgFirstOnMobile }) {
  const first = children[0];
  const last = children[1];

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  let codeToReturn;

  if (sequential && imgFirstOnMobile && windowSize <= 767) {
    codeToReturn = (
      <>
        {first} {last}
      </>
    );
  } else {
    if (sequential) {
      codeToReturn = (
        <>
          {last} {first}
        </>
      );
    } else if (!sequential) {
      codeToReturn = (
        <>
          {first} {last}
        </>
      );
    }
  }
  return <div>{codeToReturn}</div>;
}
