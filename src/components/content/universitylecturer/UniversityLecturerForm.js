import {useState} from "react";
import axios from "axios";
import classes from './UniversityLecturer.module.css'
import CardComponent from "../../CardComponent";
import DeleteIcon from '@material-ui/icons/Delete';
import {Button, Grid, MenuItem, TextField} from "@material-ui/core";

const EMPTY_NEW_UNIVERSITY_LECTURER =  {
    'id': null,
    'name': null,
    'surname': null,
    'pesel':null,
    'universityLecturerDegreesEnum':null,

}
const UniversityLecturerForm = () => {
    const [editedUniversityLecturers,setEditedUniversityLecturers] = useState({...EMPTY_NEW_UNIVERSITY_LECTURER});

    const handleChangeForm = name => event => {
        setEditedUniversityLecturers({...editedUniversityLecturers, [name]: event.target.value});
    };


    const handleClearForm = () => {
        setEditedUniversityLecturers({...EMPTY_NEW_UNIVERSITY_LECTURER})
    }

    const handleSubmit = () => {
        // wysłanie obiektu na serwer
        console.log("Wysyłamy:" + JSON.stringify(editedUniversityLecturers))

        axios.post('http://localhost:8080/api/universitylecturers', editedUniversityLecturers)
            .then((data) => {
                console.log("Success: " + JSON.stringify(data));
            })
            .catch((err) => {
                console.log("Fail: " + JSON.stringify(err));

            })
    }

    return (
        <div>
            <CardComponent title={'University Lecturers Form'}>
                <Grid container className={classes.FormContainer}>
                    <Grid item xs={12}>
                        <TextField value={editedUniversityLecturers.name}
                                   onChange={handleChangeForm("name")}
                                   className={classes.FormStretchField}
                                   label={'Lecturer name'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedUniversityLecturers.surname}
                                   onChange={handleChangeForm("surname")}
                                   className={classes.FormStretchField}
                                   label={'Lecturer surname'} size={'small'} variant="filled"/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField value={editedUniversityLecturers.pesel}
                                   onChange={handleChangeForm("pesel")}
                                   className={classes.FormStretchField}
                                   label={'Lecturer pesel'} size={'small'} variant="filled"/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField value={editedUniversityLecturers.universityLecturerDegreesEnum}
                                   onChange={handleChangeForm("universityLecturerDegreesEnum")}
                                   className={classes.FormStretchField}
                                   select
                                   label='Lecturer Degree' size={'small'} variant="filled">
                            <MenuItem value={'MasterOfScience'}>Master Of Science</MenuItem>
                            <MenuItem value={'DoctorOfPhilosophy'}>Doctor Of Philosophy</MenuItem>
                            <MenuItem value={'DoctorOfEngineering'}>Doctor Of Engineering</MenuItem>
                            <MenuItem value={'Professor'}>Professor</MenuItem>
                        </TextField>
                    </Grid>


                    <Grid item xs={1}/>
                    <Grid container item xs={10}>
                        <Grid item xs={6}>
                            <Button className={classes.FormStretchField}
                                    size={'small'} variant="contained"
                                    startIcon={<DeleteIcon/>}
                                    onClick={handleClearForm}>
                                Reset
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button className={classes.FormStretchField}
                                    size={'small'} variant="contained"
                                    onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CardComponent>
        </div>
    )
}

export default UniversityLecturerForm;