import classes from "./AppHeader.module.css";
import {Link} from 'react-router-dom';

import Storage from '@material-ui/icons/Storage'
import AddComment from '@material-ui/icons/AddComment'
import logo from "../../logo.svg";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import GradeIcon from "@material-ui/icons/Grade";
import {connect} from "react-redux";

const HEADER_BUTTONS = [
    {
        name: 'Logout', /* Link do formularza */
        href: '/logout',
        icon: (<></>),  /* Brak ikony */
    },
    {
        name: 'Register',
        href: '/register',
        icon: (<></>),  /* Brak ikony */
    },
    {
        name: 'Home',
        href: '/',
        icon: (<></>),  /* Brak ikony */
    },
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

]

const AppHeaderLoggedIn = (props) => {

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
                <div className={classes.UsernameHeaderDiv}>
                    Logged in as: {props.authenticatedUsername} [{props.authenticatedUserId}] [{props.authenticatedUserAdmin?'A':'U'}]                </div>
            </div>
        </header>
    );
}
const mapStateToProps = state => {
        return {
            authenticatedUsername: state.auth.username,
            authenticatedUserAdmin: state.auth.admin,
            authenticatedUserId: state.auth.id
        };
    }
;

export default connect(mapStateToProps, null)(AppHeaderLoggedIn);