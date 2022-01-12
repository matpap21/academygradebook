import classes from "./AppContent.module.css";
import {Route, Switch} from "react-router-dom";
import ContentHome from "./home/ContentHome";

import AcademicGroupsList from "./academicgroup/AcademicGroupsList";
import AcademicGroupsForm from "./academicgroup/AcademicGroupsForm";
import FieldOfStudyList from "./fieldofstudy/FieldOfStudyList";
import FieldOfStudyForm from "./fieldofstudy/FieldOfStudyForm";
import AcademicSubjectsList from "./academicsubject/AcademicSubjectsList";
import AcademicSubjectsForm from "./academicsubject/AcademicSubjectsForm";
import UniversityLecturersList from "./universitylecturer/UniversityLecturersList";
import UniversityLecturerForm from "./universitylecturer/UniversityLecturerForm";
import StudentsList from "./student/StudentsList";
import StudentForm from "./student/StudentForm";
import GradesList from "./grades/GradesList";
import GradesForm from "./grades/GradesForm";




const AppContent = () => {
    return (
        <div className={classes.AppContent}>
            <Switch>

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

                <Route path={'/grade/add'}>
                    <GradesForm/>
                </Route>
                <Route path={'/grades'}>
                    <GradesList/>
                </Route>

                <Route path={'/'}>
                    <ContentHome/>
                </Route>
            </Switch>
        </div>

    )
}

export default AppContent;