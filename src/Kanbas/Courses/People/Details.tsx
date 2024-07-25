import React, {useEffect, useState} from "react";
import {FaCheck, FaUserCircle} from "react-icons/fa";
import {IoCloseSharp} from "react-icons/io5";
import {useNavigate, useParams} from "react-router";
import {FaPencil} from "react-icons/fa6";
import {Link} from "react-router-dom";
import * as client from "./client";

export default function PeopleDetails({fetchUsers}: { fetchUsers: () => void; }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const [editing, setEditing] = useState(false);

    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = {...user, firstName, lastName, email, role};

        await client.updateUser(updatedUser);

        setUser(updatedUser);
        setEmail(email);
        setRole(role);

        setEditing(false);

        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    };

    const navigate = useNavigate();

    const deleteUser = async (userId: string) => {
        await client.deleteUser(userId);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    }

    const {uid, cid} = useParams();
    const [user, setUser] = useState<any>({});
    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
    };
    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);
    if (!uid) return null;

    return (<div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
        <Link to={`/Kanbas/Courses/${cid}/People`}
              className="btn position-fixed end-0 top-0 wd-close-details">
            <IoCloseSharp className="fs-1"/>
        </Link>
        <div className="text-center mt-2"><FaUserCircle className="text-secondary me-2 fs-1"/></div>
        <hr/>

        <div className="text-danger fs-2 wd-name">
            {!editing && (<FaPencil onClick={() => setEditing(true)}
                                    className="float-end fs-2 mt-2 wd-edit"/>)}
            {editing && (<FaCheck onClick={() => saveUser()}
                                  className="float-end fs-2 mt-2 me-2 wd-save"/>)}
            {!editing && (<div className="wd-name text-danger"
                               onClick={() => setEditing(true)}>
                {user.firstName} {user.lastName}
            </div>)}
        </div>
        {user && editing && (<input className="form-control w-50 wd-edit-name"
                                    defaultValue={`${user.firstName} ${user.lastName}`}
                                    onChange={(e) => setName(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            saveUser();
                                        }
                                    }}
        />)}

        <b>Email:</b>
        {user && editing ? (<span>
                <input className="form-control w-50 wd-edit-email"
                       defaultValue={`${user.email}`}
                       onChange={(e) => setEmail(e.target.value)}
                       onKeyDown={(e) => {
                           if (e.key === "Enter") {
                               saveUser();
                           }
                       }}
                />
            </span>) : (<span onClick={() => setEditing(true)}>
                {user.email}
            </span>)}
        <br/>

        <b>Roles:</b>
        {user && editing ? (<span>
                <select className="form-select w-25 wd-edit-roles" defaultValue={`${user.role}`}
                        onChange={(e) => setRole(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                saveUser();
                            }
                        }}>
                    <option value="STUDENT">Student</option>
                    <option value="TA">Assistant</option>
                    <option value="FACULTY">Faculty</option>
                </select>
            </span>) : (<span onClick={() => setEditing(true)}>
                {user.role}
            </span>)}
        <br/>

        <b>Login ID:</b> <span className="wd-login-id">      {user.loginId}      </span> <br/>
        <b>Section:</b> <span className="wd-section">       {user.section}      </span> <br/>
        <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>

        <hr/>
        <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete"> Delete</button>
        <button onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)}
                className="btn btn-secondary float-start float-end me-2 wd-cancel"> Cancel
        </button>
    </div>);
}
