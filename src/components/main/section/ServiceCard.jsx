import style from "./ServiceCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLineChart } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";






export function ServiceCard() {
    return (
        <div className={style.servicesContainer}>
            <div className={style.servicesItem}>

                <div className={style.iconBox} >  <FontAwesomeIcon className={style.icon} icon={faLineChart} /></div>

                <h3> Market Research</h3>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
            </div>
            <div className={style.servicesItem}>
                <div className={style.iconBox} >  <FontAwesomeIcon className={style.icon} icon={faLightbulb} /></div>
                <h3> Market Research</h3>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
            </div>
            <div className={style.servicesItem}>
                <div className={style.iconBox} >  <FontAwesomeIcon className={style.icon} icon={faChartColumn} /></div>
                <h3> Market Research</h3>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
            </div>
            <div className={style.servicesItem}>
                <div className={style.iconBox} >  <FontAwesomeIcon className={style.icon} icon={faServer} /></div>
                <h3> Market Research</h3>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
            </div>


        </div>

    );
}