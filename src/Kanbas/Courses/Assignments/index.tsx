import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import {BsGripVertical} from "react-icons/bs";
import HomeworkControlButtons from "./HomeworkControlButtons";
import {GoTriangleDown} from "react-icons/go";
import { TfiPencilAlt } from "react-icons/tfi";

export default function Assignments() {
    return (
        <div id="wd-assignment">
            <AssignmentControls/><br/>
            <ul id="wd-assignment-title" className="list-group rounded-0">
                <li className="wd-title list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <GoTriangleDown className="me-1 fs-4"/>
                        ASSIGNMENTS
                        <AssignmentControlButtons/>
                    </div>
                    {/*<ul id="wd-assignment-list list-group rounded-0">*/}
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3"/>
                        <TfiPencilAlt className="me-3 fs-5 text-success"/>
                        <a className="wd-assignment-list-item" href="#/Kanbas/Courses/1234/Assignments/123">
                            A1
                        </a>
                        {/*<br/>*/}
                        {/*<div>Multiple Modules| Not available until May 6 at 12:00am|</div>*/}
                        {/*<div>Due May 13 at 11:59pm | 100 pts</div>*/}
                        <HomeworkControlButtons/>
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3"/>
                        <TfiPencilAlt className="me-3 fs-5 text-success"/>
                        <a className="wd-assignment-list-item" href="#/Kanbas/Courses/1234/Assignments/123">
                            A2
                        </a>
                        {/*<br/>*/}
                        {/*<div>*/}
                        {/*    Multiple Modules| Not available until May 13 at 12:00am|*/}
                        {/*/!*</div>*!/*/}
                        {/*<div>*/}
                        {/*    Due May 20 at 11:59pm | 100 pts*/}
                        {/*</div>*/}
                        <HomeworkControlButtons/>
                    </li>
                    <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3"/>
                        <TfiPencilAlt className="me-3 fs-5 text-success"/>
                        <a className="wd-assignment-list-item" href="#/Kanbas/Courses/1234/Assignments/123">
                            A3
                        </a>
                        {/*<br/>*/}
                        {/*<div>*/}
                        {/*    Multiple Modules| Not available until May 20 at 12:00am|*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    Due May 27 at 11:59pm | 100 pts*/}
                        {/*</div>*/}
                        <HomeworkControlButtons/>
                    </li>
                    {/*</ul>*/}
                </li>
            </ul>
        </div>
    )
};