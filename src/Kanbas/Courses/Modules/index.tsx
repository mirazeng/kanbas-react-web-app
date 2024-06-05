import ModulesControls from "./ModulesControls";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (
        <div id="wd-modules">
            <ModulesControls/><br/><br/><br/>
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        Week 1
                        <ModuleControlButtons/>
                    </div>
                    <ul className="wd-lessons list-group rounded-0" style={{borderLeft: '5px solid green'}}>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">Introduction to the course</span>
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">Learn what is Web Development</span>
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">LESSON 1</span>
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">LESSON 2</span>
                            <LessonControlButtons/>
                        </li>
                    </ul>
                </li>

                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="mr-2 fs-3"/>
                        Week 2
                        <ModuleControlButtons/>
                    </div>
                    <ul className="wd-lessons list-group rounded-0" style={{borderLeft: '5px solid green'}}>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">LESSON 1</span>
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <span className="wd-title">LESSON 2</span>
                            <LessonControlButtons/>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
