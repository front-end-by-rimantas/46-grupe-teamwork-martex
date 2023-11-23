import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";

export function CardComponent({ sequential, children, imgFirstOnMobile }) {
  const first = children[0];
  const last = children[1];

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [windowSize]);

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
  return <Col>{codeToReturn}</Col>;
}
