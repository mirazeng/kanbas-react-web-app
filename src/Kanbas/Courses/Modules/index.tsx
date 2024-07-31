import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import ModulesControls from "./ModulesControls";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import * as client from "./client";

import {addModule, deleteModule, editModule, setModules, updateModule} from "./reducer";
import {useDispatch, useSelector} from "react-redux";
import {isNumberObject} from "node:util/types";
// import {courses} from "../../Database";

export default function Modules() {
    const {cid} = useParams();
    const [moduleName, setModuleName] = useState("");
    const {modules} = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();

    const createModule = async (module: any) => {
        const newModule = await client.createModule(module);
        /* NOTE: For now, addModule is trying to create an _id using date, which will cause mismatch everytime we do anything with the newly-created module, so fetch from server again after creation to avoid this issue (a little hacky)*/
        //dispatch(addModule(newModule));
        fetchModules();
    };

    const removeModule = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    const fetchModules = async () => {
        const modules = await client.findModulesInCourse(cid as string);
        console.log("DEBUG: Modules/index.tsx -> fetchModules -> modules", modules);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModules();
    }, []);


    const saveModule = async (module: any) => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    return (<div className={"wd-modules"}>
        <ModulesControls
            moduleName={moduleName}
            setModuleName={setModuleName}
            addModule={() => {
                createModule({name: moduleName, course: cid});
                setModuleName("");
            }}
        /> <br/><br/><br/>
        <ul id="wd-modules" className="list-group rounded-0">
            {modules
                .filter((m: any) => m.course === cid)
                .map((m: any) => (
                    <li key={m._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3"/>
                            {!m.editing && m.name}
                            {m.editing && (
                                <input
                                    className="form-control w-50 d-inline-block"
                                    value={m.name}
                                    onChange={(e) => saveModule({...m, name: e.target.value})}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveModule({...m, editing: false});
                                        }
                                    }}
                                />)}
                            <ModuleControlButtons moduleId={m._id}
                                                  deleteModule={(moduleId) => {
                                                      removeModule(moduleId);
                                                  }}
                                                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                            />
                        </div>
                        {m.lessons && (
                            <ul className="wd-lessons list-group rounded-0" style={{borderLeft: '5px solid green'}}>
                                {m.lessons.map((lesson: any) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3"/>
                                        {lesson.name}
                                        <LessonControlButtons/>
                                    </li>))}
                            </ul>)}
                    </li>))}
        </ul>
    </div>);
}
