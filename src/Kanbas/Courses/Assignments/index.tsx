import {useParams} from "react-router";
import * as db from "../../Database";
import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import {BsGripVertical} from "react-icons/bs";
import HomeworkControlButtons from "./HomeworkControlButtons";
import {GoTriangleDown} from "react-icons/go";
import {TfiPencilAlt} from "react-icons/tfi";

export default function Assignments() {
    const {cid} = useParams();
    console.log("DEBUG: course assignment index.tsx: " , cid);
    const assignments = db.assignments;

    return (
        <div id="wd-assignment">
            <AssignmentControls/><br/><br/>
            <ul id="wd-assignment-title" className="list-group rounded-0">
                <li className="wd-title list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <GoTriangleDown className="me-1 fs-4"/>
                        ASSIGNMENTS
                        <AssignmentControlButtons/>
                    </div>
                    <ul className="wd-assignment-list list-group rounded-0" style={{borderLeft: '5px solid green'}}>
                        {assignments.filter((assignment: any) => assignment.course === cid).map((assignment: any) => (
                            <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1">
                                <div className="d-flex align-items-center flex-grow-1">
                                    <BsGripVertical className="me-2 fs-3"/>
                                    <TfiPencilAlt className="me-4 fs-5 text-success"/>
                                    <span className="d-inline-block">
                                      <a className="wd-assignment-list-item fw-bold"
                                         href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                         style={{color: 'black'}}>
                                            {assignment.title}
                                      </a>
                                            <div className="ms-0">
                                                  <div className="d-flex align-items-center">
                                                        <div className="text-danger">Multiple Modules</div>
                                                        <div className="ms-2">|</div>
                                                        <div className="fw-bold ms-2"> Not available until</div>
                                                        <div className="ms-2">{assignment.available}</div>
                                                  </div>
                                                  <div className="d-flex align-items-center">
                                                        <div className="fw-bold">Due</div>
                                                        <div className="ms-2">{assignment.due}</div>
                                                        <div className={"ms-2"}> | </div>
                                                        <div className="ms-2"> {assignment.points} pts </div>
                                                  </div>
                                             </div>
                                    </span>
                                    <div className="ms-auto">
                                        <HomeworkControlButtons/>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {/* <ul className="wd-assignmnet-list list-group rounded-0" style={{borderLeft: '5px solid green'}}>
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center flex-grow-1">
                                <BsGripVertical className="me-2 fs-3"/>
                                <TfiPencilAlt className="me-4 fs-5 text-success"/>
                                <span className="d-inline-block">
                                <a className="wd-assignment-list-item fw-bold"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    A1
                                </a>
                                    <div className="ms-0">
                                        <div className="d-flex align-items-center">
                                            <div className="text-danger">Multiple Modules</div>
                                            <div className="ms-2">|</div>
                                            <div className="fw-bold ms-2"> Not available until </div>
                                            <div className="ms-2">May 6 at 12:00am |</div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="fw-bold">Due</div>
                                            <div className="ms-2">May 13 at 11:59pm | 100 pts</div>
                                        </div>
                                    </div>
                                </span>
                                <div className="ms-auto">
                                    <HomeworkControlButtons/>
                                </div>
                            </div>
                        </li>

                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center flex-grow-1">
                                <BsGripVertical className="me-2 fs-3"/>
                                <TfiPencilAlt className="me-4 fs-5 text-success"/>
                                <span className="d-inline-block">
                                <a className="wd-assignment-list-item fw-bold"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                    A2
                                </a>
                                    <div className="ms-0">
                                        <div className="d-flex align-items-center">
                                            <div className="text-danger">Multiple Modules</div>
                                            <div className="ms-2">|</div>
                                            <div className="fw-bold ms-2"> Not available until </div>
                                            <div className="ms-2">May 13 at 12:00am |</div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="fw-bold">Due</div>
                                            <div className="ms-2">May 20 at 11:59pm | 100 pts</div>
                                        </div>
                                    </div>
                            </span>
                                <div className="ms-auto">
                                    <HomeworkControlButtons/>
                                </div>
                            </div>
                        </li>

                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <div className="d-flex align-items-center flex-grow-1">
                                <BsGripVertical className="me-2 fs-3"/>
                                <TfiPencilAlt className="me-4 fs-5 text-success"/>
                                <span className="d-inline-block">
                                <a className="wd-assignment-list-item fw-bold"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                A3
                                </a>
                                    <div className="ms-0">
                                        <div className="d-flex align-items-center">
                                            <div className="text-danger">Multiple Modules</div>
                                            <div className="ms-2">|</div>
                                            <div className="fw-bold ms-2"> Not available until </div>
                                            <div className="ms-2">May 20 at 12:00am |</div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="fw-bold">Due</div>
                                            <div className="ms-2">May 27 at 11:59pm | 100 pts</div>
                                        </div>
                                    </div>
                                </span>
                                <div className="ms-auto">
                                    <HomeworkControlButtons/>
                                </div>
                            </div>
                        </li>
                    </ul>*/}
                </li>
            </ul>
        </div>
    )
};