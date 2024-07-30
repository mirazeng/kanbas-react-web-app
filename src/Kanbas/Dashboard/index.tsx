import React from "react";
import {Link} from "react-router-dom";

export default function Dashboard({
                                      courses, course, setCourse, addNewCourse, deleteCourse, updateCourse
                                  }: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (_id: any) => void;
    updateCourse: () => void;
}) {
    return (<div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
            </h1>

            <hr/>
            <h5>
                New Course
                <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}>Add</button>

                <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                    Update
                </button>

            </h5>

            <br/>
            <input value={course.name} className={"form-control mb-2"}
                   onChange={(e) => setCourse({...course, name: e.target.value})}/>
            <textarea value={course.description} className={"form-control"}
                      onChange={(e) => setCourse({...course, description: e.target.value})}/>

            <hr/>

            <h2 id="wd-dashboard-pulished">Published Courses ({courses.length})</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (<div className="wd-dashboard-courses col" style={{width: "300px"}}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                                <div className="card rounded-3 overflow-hidden">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img src={`/images/${course.image}`} alt={"picture"} height="{160}"/>
                                    <div className="card-body">
                                    <span className="wd-dashboard-course-link"
                                          style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
                                          {course.name}
                                    </span>
                                        <p className="wd-dashboard-course-link card-text"
                                           style={{maxHeight: 53, overflow: "hidden"}}>
                                            {course.description}
                                        </p>
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                              className="btn btn-primary"> Go </Link>

                                        <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" style={{marginLeft: "5px"}}>
                                            Edit
                                        </button>


                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </Link>

                        </div>))}
                </div>
            </div>
        </div>);
}


//
// <a className="wd-dashboard-course-link"
//                            href="#/Kanbas/Courses/1234/Home"
//                            style={{textDecoration: "none", color: "navy", fontWeight: "bold"}}>
//                             CS1234 React JS
//                         </a>
//                         <p className="wd-dashboard-course-link card-text">
//                             Software Development
//                         </p>
//                         <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="wd-dashboard-courses col" style={{width: "300px"}}>
//                 <div className="card">
//                     <img src="/images/data-structure.png"/>
//                     <div className="card-body">
//                         <a className="wd-dashboard-course-link"
//                            href="#/Kanbas/Courses/1234/Home"
//                            style={{textDecoration: "none", color: "green", fontWeight: "bold"}}>
//                             CS5008 Data Structure
//                         </a>
//                         <p className="wd-dashboard-course-link card-text">
//                             Models of computing
//                         </p>
//                         <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="wd-dashboard-courses col" style={{width: "300px"}}>
//                 <div className="card">
//                     <img src="/images/ood.png"/>
//                     <div className="card-body">
//                         <a className="wd-dashboard-course-link"
//                            href="#/Kanbas/Courses/1234/Home"
//                            style={{textDecoration: "none", color: "darkred", fontWeight: "bold"}}>
//                             CS5004 OOD
//                         </a>
//                         <p className="wd-dashboard-course-link card-text">
//                             Class-based program design
//                         </p>
//                         <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="wd-dashboard-courses col" style={{width: "300px"}}>
//                 <div className="card">
//                     <img src="/images/web-dev.png"/>
//                     <div className="card-body">
//                         <a className="wd-dashboard-course-link"
//                            href="#/Kanbas/Courses/1234/Home"
//                            style={{textDecoration: "none", color: "purple", fontWeight: "bold"}}>
//                             CS5610 Web Development
//                         </a>
//                         <p className="wd-dashboard-course-link card-text">
//                             Website Development
//                         </p>
//                         <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="wd-dashboard-courses col" style={{width: "300px"}}>
//                 <div className="card">
//                     <img src="/images/discrete-math.png"/>
//                     <div className="card-body">
//                         <a className="wd-dashboard-course-link"
//                            href="#/Kanbas/Courses/1234/Home"
//                            style={{textDecoration: "none", color: "darkorange", fontWeight: "bold"}}>
//                             CS5002 Discrete Structures
//                         </a>
//                         <p className="wd-dashboard-course-link card-text">
//                             CS Mathematical foundation
//                         </p>
//                         <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="wd-dashboard-courses col" style={{width: "300px"}}>
//                 <div className="card">
//                     <img src="/images/hci.jpg"/>
//                     <div className="card-body">
//                         <a className="wd-dashboard-course-link"
//                            href="#/Kanbas/Courses/1234/Home"
//                            style={{textDecoration: "none", color: "blueviolet", fontWeight: "bold"}}>
//                             CS5340 HCI
//                         </a>
//                         <p className="wd-dashboard-course-link card-text">
//                             Human-computer Interaction
//                         </p>
//                         <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="wd-dashboard-courses col" style={{width: "300px"}}>
//                 <div className="card">
//                     <img src="/images/db.png"/>
//                     <div className="card-body">
//                         <a className="wd-dashboard-course-link"
//                            href="#/Kanbas/Courses/1234/Home"
//                            style={{textDecoration: "none", color: "crimson", fontWeight: "bold"}}>
//                             Database Management
//                         </a>
//                         <p className="wd-dashboard-course-link card-text">
//                             CS5200
//                         </p>
//                         <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="wd-dashboard-courses col" style={{width: "300px"}}>
//                 <div className="card">
//                     <img src="/images/nlp.jpg"/>
//                     <div className="card-body">
//                         <a className="wd-dashboard-course-link"
//                            href="#/Kanbas/Courses/1234/Home"
//                            style={{textDecoration: "none", color: "burlywood", fontWeight: "bold"}}>
//                             CS5760 NLP
//                         </a>
//                         <p className="wd-dashboard-course-link card-text">
//                             Natural Language Processing
//                         </p>
//                         <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//     </div>
// </div>