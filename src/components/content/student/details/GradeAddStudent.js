import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import StudentsTable from "../StudentsTable";
import instance from "../../../../axios/axios";

const AcademicGroupAddStudent = () => {
    // dzięki temu że otrzymujemy studentId, możliwe jest późniejsze dodanie
    //  studenta do danej grupy.
    const {studentId} = useParams();
    const [grade, setGrades] = useState([])
    const [student, setStudent] = useState({
        'students': [],
    })

    const pullStudents = () => {
        instance.get("/api/students")
            .then((data) => {
                // data ma pole data
                console.log("Otrzymaliśmy sukces odpowiedź!")
                console.log("Rekordy: " + JSON.stringify(data.data));

                setStudent(data.data);
            })
            .catch((error) => {
                console.log("Otrzymaliśmy odpowiedź o błędzie!")
            });
    }

    const pullAcademicGroups = () => {
        instance.get(`/api/academicgroups/${studentId}`)
            .then((data) => {
                // data ma pole data
                console.log("Otrzymaliśmy sukces odpowiedź!")
                console.log("Rekordy: " + JSON.stringify(data.data));

                setAcademicGroup(data.data);
            })
            .catch((error) => {
                console.log("Otrzymaliśmy odpowiedź o błędzie!")
            });
    }

    const addStudentToAcademicGroup = (idStudent) => {
        console.log("Removing: " + idStudent)
        instance.post(`/api/academicgroups/student/${studentId}/${idStudent}`)
            .then((data) => {
                // data ma pole data
                console.log("Otrzymaliśmy sukces odpowiedź!")
                console.log("Rekordy: " + JSON.stringify(data.data));

                pullStudents();
                pullAcademicGroups();
            })
            .catch((error) => {
                console.log("Otrzymaliśmy odpowiedź o błędzie!")
            });
    }

    const removeStudentFromAcademicGroup = (idStudent) => {
        console.log("Adding: " + idStudent)
        instance.delete(`/api/academicgroups/student/${studentId}/${studentId}`)
            .then((data) => {
                // data ma pole data
                console.log("Otrzymaliśmy sukces odpowiedź!")
                console.log("Rekordy: " + JSON.stringify(data.data));

                pullStudents();
                pullAcademicGroups();
            })
            .catch((error) => {
                console.log("Otrzymaliśmy odpowiedź o błędzie!")
            });
    }

    const isStudentAdded = (studentId) => {
        for (let academicGroupStudentId in academicGroup.students){
            if(academicGroup.students[academicGroupStudentId].id === studentId){
                return true;
            }
        }
        return false
    }

    useEffect(() => {
        pullStudents();
        pullAcademicGroups();
    }, [])

    return (
        <div>
            <StudentsTable rows={student}
                            hideDelete={true}
                            onAdd={addStudentToAcademicGroup()}
                            onRemove={removeStudentFromAcademicGroup()}
                            isAdded={isStudentAdded()}/>
        </div>
    )
}
export default AcademicGroupAddStudent;