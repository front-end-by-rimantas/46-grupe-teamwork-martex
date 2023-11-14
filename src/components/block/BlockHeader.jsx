import style from "./BlockHeader.module.css";

export function BlockHeader(){
    return (
        <div className={style.blockHeader}>
            <h1 className={style.h1}>Build a customer-<br />centric marketing strategy</h1>
            <p className={style.p}>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </div>
    );
}