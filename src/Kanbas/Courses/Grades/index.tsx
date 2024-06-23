import GradesControls from "./GradesControls";
import {HiMagnifyingGlass} from "react-icons/hi2";
import {FiFilter} from "react-icons/fi";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import * as db from "../../Database";
import {useParams} from "react-router";
import {assignments} from "../../Database";

export default function Grades() {
    const {cid} = useParams(); //current active course id
    const assignment = db.assignments;
    const enrollments = db.enrollments;
    const users = db.users;
    const grades = db.grades;


    const getGradesData = (enrollments: any[], users: any[], grades: any[]) => {
        let result = []; //

        // we need to know which students is in current active class
        let studentEnrolledClass = enrollments.filter((dataEntry) => dataEntry.course === cid);
        console.log("Debug: test is ", studentEnrolledClass);

        // For each student enrolled, use the "user" field to find matching entries from grades.json and users.json
        for (let i = 0; i < studentEnrolledClass.length; i++) {
            let eachStudent = studentEnrolledClass[i];
            let enrolledID = eachStudent.user;

            let enrolledFirstName = users.find((user) => user._id === enrolledID).firstName;
            let enrolledLastName = users.find((user) => user._id === enrolledID).lastName;
            let studentName = enrolledFirstName + " " + enrolledLastName;

            let studentGrades = grades.filter((gradeData) => {
                return (gradeData.student === enrolledID) && (() => assignment.find((entry) => entry.course === cid));
            });

            let studentData = {
                studentID: enrolledID,
                studentName: studentName,
                studentGrades: studentGrades
            };

            result.push(studentData);
        }
        return result
    }

    const target_data = getGradesData(enrollments, users, grades);


    return (<div id="wd-grades">
        <br/>
        <GradesControls/>
        <br/> <br/>
        <div className="row mb-3">
            <div className="col mb-3">
                <label htmlFor="wd-search-student-name" className="form-label fw-bold fs-5">
                    Student Names
                </label>
                <div className="input-group">
                    {/*/!*<span className="input-group-text">*/}
                    {/*        <i className="bi bi-search"/>*/}
                    {/*    </span>*!/*/}
                    {/*/!*<select className="form-select input-group-text"*!/*/}
                    {/*/!*        defaultValue=""*!/*/}
                    {/*/!*style={{textAlign:'left', paddingLeft:'12px'}}>*!/*/}
                    {/*/!*    <option value="" disabled className="float-start">Search Students</option>*!/*/}
                    {/*/!*</select>*!/*/}
                    <span className="input-group-text">
                                <HiMagnifyingGlass/>
                            </span>
                    <input type="text"
                           className="form-control"
                           id="wd-search-student-name"
                           placeholder="Search Students"/>
                    <span className="input-group-text">
                                <MdOutlineKeyboardArrowDown/>
                        </span>
                </div>
            </div>
            <div className="col mb-3">
                <label htmlFor="wd-search-assignment-name" className="form-label fw-bold fs-5">
                    Assignment Names
                </label>
                <div className="input-group">
                            <span className="input-group-text">
                                <HiMagnifyingGlass/>
                            </span>
                    <input id="wd-search-assignment-name" className="form-control" type="text"
                           placeholder="Search Assignments"/>
                    <span className="input-group-text">
                                <MdOutlineKeyboardArrowDown/>
                        </span>
                </div>
            </div>
        </div>

        <div className="row mb-3">
            <div className="col-12 mb-4">
                <button type="button" className="btn btn-secondary me-2">
                    <FiFilter className="me-1"/>
                    Apply Filters
                </button>
            </div>

            <div className="col-12">
                <div className="table-responsive-sm">
                    <table className="table table-striped table-bordered">
                        <thead>

                        <tr>
                            <th>Student Name</th>
                            {
                                (assignments.filter((assignmentEntry) => assignmentEntry.course === cid)).map((classEntry) => (

                                    (
                                        <th>{classEntry._id}<br/> Out of 100</th>
                                    )
                                ))

                            }

                        </tr>
                        </thead>

                        <tbody>
                        {target_data.map((studentEntry) => (<tr>
                            <td className={"text-danger"}>{studentEntry.studentName}
                            </td>
                            {studentEntry.studentGrades.map((grade) => (<td>{grade.grade}</td>))}
                        </tr>))}

                        {/*<tr>
                                <td className="text-danger">Jane Adams</td>
                                <td>100%</td>
                                <td>96.65%</td>
                                <td>92.18%</td>
                                <td>66.22%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Christina Allen</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Sameera Ansari</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Han Bao</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>
                                    <input className="form-control" placeholder="88.03%"/>
                                </td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
                                <td>100%</td>
                                <td>96.67%</td>
                                <td>98.37%</td>
                                <td>98.99%</td>
                            </tr>
                            <tr>
                                <td className="text-danger">Siran Cao</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>*/}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>);
}
