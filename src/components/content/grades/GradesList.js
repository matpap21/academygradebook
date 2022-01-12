import CardComponent from "../../CardComponent";
import classes from './GradesList.module.css';
import {Link} from "react-router-dom";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useEffect, useState} from "react";
import axios from "axios";
import GradesTable from "./GradesTable";

const GradesList = () => {
    const [rows, setRows] = useState([]);

    const pullRecordsFromDatabaseServer = () => {
        axios.get("http://localhost:8080/api/grades")
            .then((data) => {
                // data ma pole data
                console.log("Otrzymaliśmy sukces odpowiedź!")
                console.log("Rekordy: " + JSON.stringify(data.data));

                setRows(data.data);
            })
            .catch((error) => {
                console.log("Otrzymaliśmy odpowiedź o błędzie!")
            });
    }

    useEffect(() => {
        pullRecordsFromDatabaseServer();
    }, [])

    return (
        <div>
            <div className={classes.AddButtonContainer}>
                <Link to={"/grade/add"} className={classes.GradesAddButton}>
                    <Button variant="outlined">Add New</Button>
                </Link>
            </div>
            <GradesTable rows={rows} refreshData={pullRecordsFromDatabaseServer}/>
        </div>
    )
}
export default GradesList;