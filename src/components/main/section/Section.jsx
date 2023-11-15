import { ExplanatoryText } from "./ExplanatoryText";
import style from "./Section.module.css"

export function Section(){
    return (
        <div className={style.section}>
            <img className={style.img} src="./img/img-10.png" alt="somePhoto" />
            <div className={style.forText}>
                <ExplanatoryText/>
            </div>
        </div>
    );
}