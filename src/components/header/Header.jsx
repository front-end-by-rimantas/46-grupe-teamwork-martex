import styles from './Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header(){
    return (
        <>
        <header className={styles.header}>
            <img className={styles.headerLogo} src="./img/logo.png" alt="logo" />
            <FontAwesomeIcon icon={faBars} size='xl'/>
        </header>
        </>
    )
}