import style from './ExplanatoryText.module.css';

export function ExplanatoryText(){
    return (
        <div className={style.explanatoryTextContainer}>
            <h3 className={style.upperCaseH3}>enhance Engagement</h3>
            <h1 className={style.textName}>Engage your most valuable visitors</h1>
            <p className={style.casualText}>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit</p>
            <h2 className={style.secondTextName}>Digits that define growth</h2>
            <ul>
                <li>Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue cursus dolor</li>
                <li>Purus suscipit cursus vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue magna placerat</li>
            </ul>
        </div>
    )
}