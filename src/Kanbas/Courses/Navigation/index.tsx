import "./index.css";
import {Link, useLocation, useParams} from "react-router-dom";

export default function CoursesNavigation() {
    const {pathname} = useLocation();
    const {cid} = useParams();

    const links = [
        {label: "Home", path: `/Kanbas/Courses/${cid}/Home`},
        {label: "Modules", path: `/Kanbas/Courses/${cid}/Modules`},
        {label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza`},
        {label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom`},
        {label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments`},
        {label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes`},
        {label: "Grades", path: `/Kanbas/Courses/${cid}/Grades`},
        {label: "People", path: `/Kanbas/Courses/${cid}/People`},
    ];
    return (
        <div id="wd-courses-navigation" className="border-0 fs-5 rounded-0 p-3">

            {links.map((link) => (
                <Link key={link.path} to={link.path}
                      className={`list-group-item p-2
                                  ${pathname.includes(link.label) ? "active" : "text-danger"}`}>
                    {link.label}
                </Link>
            ))}

            {/*<a id="wd-courses-home-link" href="#/Kanbas/Courses/1234/Home"*/
            }
            {/*className="list-group-item active border border-0">Home</a>*/
            }

            {/*<a id="wd-courses-modules-link" href="#/Kanbas/Courses/1234/Modules"*/
            }
            {/*className="list-group-item text-danger border border-0">Modules</a>*/
            }

            {/*<a id="wd-courses-piazza-link" href="#/Kanbas/Courses/1234/Piazza"*/
            }
            {/*className="list-group-item text-danger border border-0">Piazza</a>*/
            }

            {/*<a id="wd-courses-zoom-link" href="#/Kanbas/Courses/1234/Zoom"*/
            }
            {/*className="list-group-item text-danger border border-0">Zoom</a>*/
            }

            {/*<a id="wd-courses-assignment-link" href="#/Kanbas/Courses/1234/Assignments"*/
            }
            {/*className="list-group-item text-danger border border-0">Assignments</a>*/
            }

            {/*<a id="wd-courses-quizzes-link" href="#/Kanbas/Courses/1234/Quizzes"*/
            }
            {/*className="list-group-item text-danger border border-0">Quizzes</a>*/
            }

            {/*<a id="wd-courses-grades-link" href="#/Kanbas/Courses/1234/Grades"*/
            }
            {/*className="list-group-item text-danger border border-0">Grades</a>*/
            }
        </div>
    );
}