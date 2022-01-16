import CardComponent from "../../../CardComponent";
import classes from './StudentDetails.module.css';
import {Link, useParams} from "react-router-dom";
import {Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useEffect, useState} from "react";
import StudentsTable from "../StudentsTable";
import instance from "../../../../axios/axios";
import AcademicGroupsAddStudentsTable from "./AcademicGroupsAddStudentsTable";

const StudentDetails = () => {
    const {studentId} = useParams();
    const [student, setStudent] = useState({});

    const pullRecords = () => {
        instance.get(`/api/students/${studentId}`)
            .then((data) => {
                // data ma pole data
                setStudent(data.data);
            })
            .catch((error) => {
                console.log("Otrzymaliśmy odpowiedź o błędzie!")
            });
    }

    useEffect(() => {
        pullRecords();
    }, []);

    return (
        <div>
            <CardComponent title={'Student Details'}>
                <Grid container className={classes.DetailsContainer}>
                    <Grid item xs={3}>
                        Name:
                    </Grid>
                    <Grid item xs={9}>
                        {student.name}
                    </Grid>

                    <Grid item xs={3}>
                        Surname:
                    </Grid>
                    <Grid item xs={9}>
                        {student.surname}
                    </Grid>

                    <Grid item xs={3}>
                        Pesel:
                    </Grid>
                    <Grid item xs={9}>
                        {student.pesel}
                    </Grid>

                    <Grid item xs={3}>
                        Phone number
                    </Grid>
                    <Grid item xs={9}>
                        {student.phoneNumber}
                    </Grid>

                    <Grid item xs={3}>
                        E-mail
                    </Grid>
                    <Grid item xs={9}>
                        {student.email}
                    </Grid>

                    <Grid item xs={3}>
                        Academic Group
                    </Grid>
                    <Grid item xs={9}>
                        {student.academicGroupsId}
                    </Grid>


                </Grid>
            </CardComponent>
            <div className={classes.AddButtonContainer}>
                <Link to={`/students/addGroup/${student.id}`} className={classes.TrainingsAddButton}>
                    <Button variant="outlined">Manage Students</Button>
                </Link>
            </div>
            {/*<StudentsTable rows={student.students} hideDelete={true} refreshData={pullRecords}/>*/}
            <AcademicGroupsAddStudentsTable rows={student.academicGroup} hideDelete={true} studentId = {studentId}/>
        </div>
    )
}
export default StudentDetails;