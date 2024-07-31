import Dashboard from "./Dashboard";
import {Navigate, Route, Routes} from "react-router";
import Courses from "./Courses";
import "./styles.css";
import KanbasNavigation from "./Navigation";
import {useEffect, useState} from "react";
import * as client from "./Courses/client";
import store from "./store";
import {Provider} from "react-redux";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
import Session from "./Account/Session";

export default function Kanbas() {

    const [courses, setCourses] = useState<any[]>([]);

    const fetchCourses = async () => {
        const courses = await client.fetchAllCourses();
        setCourses(courses);
    };
    useEffect(() => {
        fetchCourses();
    }, []);


    const [course, setCourse] = useState<any>({
        name: "New Course",
        number: "0",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "reactjs.png",
        description: "New Description"
    });

    const addNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = async (number: string) => {
        await client.deleteCourse(number);
        const newCourses = courses.filter(course => course.number !== number);
        setCourses(newCourses);
    };

    const updateCourse = async () => {
        await client.updateCourse(course);

        setCourses(courses.map((c) => {
            if (c.number === course.number) {
                return course;
            } else {
                return c;
            }
        }));
    };

    return (
        <Provider store={store}>
            <Session>
                <div id="wd-kanbas" className="h-100">
                    <div className="d-flex h-100">
                        <div className="d-none d-md-block bg-black wd-width-110px h-100">
                            <KanbasNavigation/>
                        </div>
                        <div className="flex-fill p-4">
                            <Routes>
                                <Route path="/" element={<Navigate to="Dashboard"/>}/>
                                <Route path="/Account/*" element={<Account/>}/>
                                <Route path="Dashboard"
                                       element={<ProtectedRoute>
                                           <Dashboard courses={courses} course={course} setCourse={setCourse}
                                                      addNewCourse={addNewCourse} deleteCourse={deleteCourse}
                                                      updateCourse={updateCourse}/>
                                       </ProtectedRoute>}/>
                                <Route path="Courses/:cid/*" element={
                                    <ProtectedRoute>
                                        <Courses courses={courses}/>
                                    </ProtectedRoute>}/>
                                <Route path="Calendar" element={<h1>Calendar</h1>}/>
                                <Route path="Inbox" element={<h1>Inbox</h1>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </Session>
        </Provider>);
}