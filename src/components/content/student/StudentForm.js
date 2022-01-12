import {useState} from "react";
import axios from "axios";
import classes from './StudentForm.module.css'
import CardComponent from "../../CardComponent";
import DeleteIcon from '@material-ui/icons/Delete';
import {Button, Grid, TextField} from "@material-ui/core";

const EMPTY_NEW_STUDENT =  {
    'id': null,
    'name': null,
    'surname': null,
    'pesel':null,
    'phoneNumber':null,
    'email':null,

}
const StudentForm = () => {
    const [editedStudents,setEditedStudents] = useState({...EMPTY_NEW_STUDENT});

    const handleChangeForm = name => event => {
        setEditedStudents({...editedStudents, [name]: event.target.value});
    };


    const handleClearForm = () => {
        setEditedStudents({...EMPTY_NEW_STUDENT})
    }

    const handleSubmit = () => {
        // wysłanie obiektu na serwer
        console.log("Wysyłamy:" + JSON.stringify(editedStudents))

        axios.post('http://localhost:8080/api/students', editedStudents)
            .then((data) => {
                console.log("Success: " + JSON.stringify(data));
            })
            .catch((err) => {
                console.log("Fail: " + JSON.stringify(err));

            })
    }

    return (
        <div>
            <CardComponent title={'Students Form'}>
                <Grid container className={classes.FormContainer}>
                    <Grid item xs={12}>
                        <TextField value={editedStudents.name}
                                   onChange={handleChangeForm("name")}
                                   className={classes.FormStretchField}
                                   label={'Student name'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedStudents.surname}
                                   onChange={handleChangeForm("surname")}
                                   className={classes.FormStretchField}
                                   label={'Student surname'} size={'small'} variant="filled"/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField value={editedStudents.pesel}
                                   onChange={handleChangeForm("pesel")}
                                   className={classes.FormStretchField}
                                   label={'Student pesel'} size={'small'} variant="filled"/>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField value={editedStudents.phoneNumber}
                                   onChange={handleChangeForm("phoneNumber")}
                                   className={classes.FormStretchField}
                                   label={'Student phone number'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedStudents.email}
                                   onChange={handleChangeForm("email")}
                                   className={classes.FormStretchField}
                                   label={'Student email'} size={'small'} variant="filled"/>
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

export default StudentForm;