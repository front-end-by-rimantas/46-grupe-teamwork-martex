import style from "./Button.module.css";
// has 3 props: props.size, props.isFilled, props.text
// phone a.k.a callback function not added as props. should be added if needed
// color should be manually adjusted in css
// may need some font adjustment for props.text a.k.a button text
export function Button(props) {
  let stiliukas = props.size === "small" ? style.small : style.bigger;

  // may need to implement here some logic to do when clicked

  if (props.isFilled) {
    return <button className={stiliukas}>{props.text}</button>;
  } else {
    stiliukas += " " + style.outlined;
    return <button className={stiliukas}>{props.text}</button>;
  }
}
