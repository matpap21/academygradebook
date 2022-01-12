import classes from "./AppHeader.module.css";
import {Link} from 'react-router-dom';
import GradeIcon from '@material-ui/icons/Grade';
import Storage from '@material-ui/icons/Storage'
import PeopleAlt from '@material-ui/icons/PeopleAlt'
import logo from "../../logo.svg";

const HEADER_BUTTONS = [

    {
        name: 'Field Of Study', /* Link do tablicy z listą rekordów/danych */
        href: '/fieldofstudy',
        icon: (<Storage fontSize={"small"}/>),
    },
    {
        name: 'Academic Group', /* Link do tablicy z listą rekordów/danych */
        href: '/groups',
        icon: (<Storage fontSize={"small"}/>),
    },
    {
        name: 'Subjects', /* Link do tablicy z listą rekordów/danych */
        href: '/subjects',
        icon: (<Storage fontSize={"small"}/>),
    },
    {
        name: 'University Lecturers',
        href: '/lecturers',
        icon: (<PeopleAlt fontSize={"small"}/>),
    },
    {
        name: 'Students',
        href: '/students',
        icon: (<PeopleAlt fontSize={"small"}/>),
    },
    {
        name: 'Grades', /* Link do tablicy z listą rekordów/danych */
        href: '/grades',
        icon: (<GradeIcon fontSize={"small"}/>),
    },
    {
        name: 'Home',
        href: '/',
        icon: (<></>),  /* Brak ikony */
    },
]

const AppHeader = () => {

    const mapToHeaderButton = (buttonInfo) => {
        return (
            /* Link zostanie zastąpiony/zaprezentowany w postaci <a> */
            <Link key={buttonInfo.name} to={buttonInfo.href} className={classes.HeaderMenuButton}>
                {buttonInfo.icon}
                <div>{buttonInfo.name}</div>
            </Link>
        )
    }

    return (
        <header className={classes.AppHeader}>
            <div className={classes.HeaderLeft}>
                <img src={logo} className={classes.AppLogo} alt="logo"/>
            </div>
            <div className={classes.HeaderRight}>
                {
                    HEADER_BUTTONS.map(mapToHeaderButton)
                }
            </div>
        </header>
    );
}

export default AppHeader;