import style from "./SectionHeader.module.css";

export function SectionHeader(){
    return (
        <div className={style.section}>
            <h1 className={style.h1}>Build a customer-<br />centric marketing strategy</h1>
            <p className={style.p}>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </div>
    );
}