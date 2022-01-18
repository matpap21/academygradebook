import CardComponent from "../CardComponent";
import AppHeaderLoggedIn from "../header/AppHeaderLoggedIn";
import classes from "../../App.css";
import {Route, Switch} from "react-router-dom";
import AppContentHome from "../content/home/AppContentHome";
import React from "react";
import Logout from "./Logout";
import AcademicGroupsForm from "../content/academicgroup/AcademicGroupsForm";
import AcademicGroupsList from "../content/academicgroup/AcademicGroupsList";
import FieldOfStudyForm from "../content/fieldofstudy/FieldOfStudyForm";
import FieldOfStudyList from "../content/fieldofstudy/FieldOfStudyList";
import UniversityLecturerForm from "../content/universitylecturer/UniversityLecturerForm";
import UniversityLecturersList from "../content/universitylecturer/UniversityLecturersList";
import AcademicSubjectsForm from "../content/academicsubject/AcademicSubjectsForm";
import AcademicSubjectsList from "../content/academicsubject/AcademicSubjectsList";
import StudentForm from "../content/student/StudentForm";
import StudentsList from "../content/student/StudentsList";
import GradesForm from "../content/grades/GradesForm";
import GradesList from "../content/grades/GradesList";
import AcademicGroupAddAttendee from "../content/student/details/AcademicGroupAddStudent";
import StudentDetails from "../content/student/details/StudentDetails";
import AcademicGroupAddStudent from "../content/student/details/AcademicGroupAddStudent";


const ContentLoggedIn = () => {
    return (
        <>
            <AppHeaderLoggedIn/>
            <div className={classes.AppContent}>
                <Switch>

                    <Route path={'/academicgroups/add/student/:studentId'}>
                        <AcademicGroupAddAttendee/>
                    </Route>
                    <Route path={'/students/details/:studentId'}>
                        <StudentDetails/>
                    </Route>

                    <Route path={'/students/addGroup/:studentId'}>
                        <AcademicGroupAddStudent/>
                    </Route>

                    <Route path={'/group/add'}>
                        <AcademicGroupsForm/>
                    </Route>
                    <Route path={'/groups'}>
                        <AcademicGroupsList/>
                    </Route>

                    <Route path={'/fieldofstudy/add'}>
                        <FieldOfStudyForm/>
                    </Route>
                    <Route path={'/fieldofstudy'}>
                        <FieldOfStudyList/>
                    </Route>

                    <Route path={'/lecturer/add'}>
                        <UniversityLecturerForm/>
                    </Route>
                    <Route path={'/lecturers'}>
                        <UniversityLecturersList/>
                    </Route>

                    <Route path={'/subject/add'}>
                        <AcademicSubjectsForm/>
                    </Route>
                    <Route path={'/subjects'}>
                        <AcademicSubjectsList/>
                    </Route>

                    <Route path={'/student/add'}>
                        <StudentForm/>
                    </Route>
                    <Route path={'/students'}>
                        <StudentsList/>
                    </Route>

                    <Route path={'/grades/add/:studentId'}>
                        <GradesForm/>
                    </Route>
                    <Route path={'/grades'}>
                        <GradesList/>
                    </Route>

                    <Route path={'/logout'}>
                        <Logout/>
                    </Route>
                    <Route path={'/'}>
                        <AppContentHome/>
                    </Route>

                </Switch>
            </div>
        </>
    )
}

export default ContentLoggedIn;