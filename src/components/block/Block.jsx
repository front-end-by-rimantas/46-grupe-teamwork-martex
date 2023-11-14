import style from "./Block.module.css"

export function Block(){
    return (
        <div className={style.block}>
            <img className={style.img} src="./img/img-10.png" alt="somePhoto" />
            <div className={style.forText}>
                PLACEHOLDER
            </div>
        </div>
    );
}