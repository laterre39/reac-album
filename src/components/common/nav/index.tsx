import {useState} from "react";
import {Link} from "react-router-dom";
import navJson from "./nav.json";
import styles from "./nav.module.scss"

interface Nav {
    index: number;
    path: string;
    label: string;
    searchValue: string;
    isActive: boolean;
}

function Nav() {
    const [navMenu, setNavMenu] = useState<Nav[]>(navJson);

    const navLinks = navMenu.map((nav: Nav) => {
        return (
            <Link to={nav.path}>
                <small className="text-base font-medium leading-none">{nav.label}</small>
            </Link>
        );
    })

    return (
        <nav className={styles.nav}>{navLinks}</nav>
    );
}

export {Nav};