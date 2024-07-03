import React, {useState} from "react";
import {useParams} from "react-router";
import ModulesControls from "./ModulesControls";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

import {addModule, deleteModule, editModule, updateModule} from "./reducer";
import {useDispatch, useSelector} from "react-redux";

export default function Modules() {
    const {cid} = useParams();
    const [moduleName, setModuleName] = useState("");

    const {modules} = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();

    return (
        <div className={"wd-modules"}>
            <ModulesControls
                moduleName={moduleName}
                setModuleName={setModuleName}
                addModule={() => {
                    dispatch(addModule({ name: moduleName, course: cid }));
                    setModuleName("");
                }}
            /> <br/><br/><br/>
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((m: any) => m.course === cid)
                    .map((m: any) => (
                        <li key={m._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!m.editing && m.name}
                                {m.editing && (
                                    <input
                                        className="form-control w-50 d-inline-block"
                                        onChange={(e) => dispatch(updateModule({ ...m, name: e.target.value }))}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                dispatch(updateModule({ ...m, editing: false }));
                                            }
                                        }}
                                        value={m.name}
                                    />
                                )}
                                <ModuleControlButtons
                                    moduleId={m._id}
                                    deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                                />
                            </div>
                            {m.lessons && (
                                <ul className="wd-lessons list-group rounded-0" style={{ borderLeft: '5px solid green' }}>
                                    {m.lessons.map((lesson: any) => (
                                        <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name}
                                            <LessonControlButtons />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );

    // return (
    //     <div id="wd-modules">
    //         <ModulesControls setModuleName={setModuleName} moduleName={moduleName}
    //                          addModule={addModule}/>
    //         <br/><br/><br/>
    //         <ul id="wd-modules" className="list-group rounded-0">
    //             {modules.filter((module) => module.course === cid).map((module: any) => (
    //                 <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
    //                     <div className="wd-title p-3 ps-2 bg-secondary">
    //                         <BsGripVertical className="me-2 fs-3"/>
    //                         {module.name}
    //                         <ModuleControlButtons moduleId={module._id}
    //                                               deleteModule={deleteModule}/>
    //                     </div>
    //                     {module.lessons && (<ul className="wd-lessons list-group rounded-0"
    //                                             style={{borderLeft: '5px solid green'}}>
    //                         {module.lessons.map((lesson: any) => (
    //                             <li className="wd-lesson list-group-item p-3 ps-1">
    //                                 <BsGripVertical className="me-2 fs-3"/>
    //                                 {lesson.name}
    //                                 <LessonControlButtons/>
    //                             </li>))}
    //                     </ul>)}
    //                 </li>))}
    //     </ul>
    // </div>);
}

{/*<li className="wd-lesson list-group-item p-3 ps-1">*/
}
{/*    <BsGripVertical className="me-2 fs-3"/>*/
}
{/*    <span className="wd-title">Introduction to the course</span>*/
}
{/*    <LessonControlButtons/>*/
}
{/*</li>*/
}
{/*<li className="wd-lesson list-group-item p-3 ps-1">*/
}
{/*    <BsGripVertical className="me-2 fs-3"/>*/
}
{/*    <span className="wd-title">Learn what is Web Development</span>*/
}
{/*    <LessonControlButtons/>*/
}
{/*</li>*/
}
{/*<li className="wd-lesson list-group-item p-3 ps-1">*/
}
{/*    <BsGripVertical className="me-2 fs-3"/>*/
}
{/*    <span className="wd-title">LESSON 1</span>*/
}
{/*    <LessonControlButtons/>*/
}
{/*</li>*/
}
{/*<li className="wd-lesson list-group-item p-3 ps-1">*/
}
{/*    <BsGripVertical className="me-2 fs-3"/>*/
}
{/*    <span className="wd-title">LESSON 2</span>*/
}
{/*    <LessonControlButtons/>*/
}
{/*</li>*/
}

{/*<li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">*/
}
{/*    <div className="wd-title p-3 ps-2 bg-secondary">*/
}
{/*        <BsGripVertical className="mr-2 fs-3"/>*/
}
{/*        Week 2*/
}
{/*        <ModuleControlButtons/>*/
}
{/*    </div>*/
}
{/*    <ul className="wd-lessons list-group rounded-0" style={{borderLeft: '5px solid green'}}>*/
}
{/*        <li className="wd-lesson list-group-item p-3 ps-1">*/
}
{/*            <BsGripVertical className="me-2 fs-3"/>*/
}
{/*            <span className="wd-title">LEARNING OBJECTIVES</span>*/
}
{/*            <LessonControlButtons/>*/
}
{/*        </li>*/
}
{/*        <li className="wd-lesson list-group-item p-3 ps-1">*/
}
{/*            <BsGripVertical className="me-2 fs-3"/>*/
}
{/*            <span className="wd-title">LESSON 1</span>*/
}
{/*            <LessonControlButtons/>*/
}
{/*        </li>*/
}
{/*        <li className="wd-lesson list-group-item p-3 ps-1">*/
}
{/*            <BsGripVertical className="me-2 fs-3"/>*/
}
{/*            <span className="wd-title">LESSON 2</span>*/
}
{/*            <LessonControlButtons/>*/
}
{/*        </li>*/
}
