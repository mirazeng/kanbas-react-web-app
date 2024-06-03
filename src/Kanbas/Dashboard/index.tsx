export default function Dashboard() {
    return (
        <div id="ws-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-pulished">Published Courses (12)</h2> <hr/>
            <div id="wd-dashboard-courses" className ="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">

                    <div className="wd-dashboard-courses col" style={{ width: "300px" }} >
                        <div className="card">
                            <img src="/images/reactjs.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration:"none", color: "navy", fontWeight:"bold" }}>
                                    CS1234 React JS
                                </a>
                                <p className="wd-dashboard-course-link card-text">
                                    Software Development
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-courses col" style={{ width: "300px" }} >
                        <div className="card">
                            <img src="/images/data-structure.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "green", fontWeight: "bold"}}>
                                    CS5008 Data Structure
                                </a>
                                <p className="wd-dashboard-course-link card-text">
                                    Models of computing
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-courses col" style={{ width: "300px" }} >
                        <div className="card">
                            <img src="/images/ood.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "darkred", fontWeight: "bold"}}>
                                    CS5004 OOD
                                </a>
                                <p className="wd-dashboard-course-link card-text">
                                  Class-based program design
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-courses col" style={{ width: "300px" }} >
                        <div className="card">
                            <img src="/images/web-dev.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "purple", fontWeight: "bold"}}>
                                    CS5610 Web Development
                                </a>
                                <p className="wd-dashboard-course-link card-text">
                                    Website Development
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-courses col" style={{ width: "300px" }} >
                        <div className="card">
                            <img src="/images/discrete-math.png"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "darkorange", fontWeight: "bold"}}>
                                    CS5002 Discrete Structures
                                </a>
                                <p className="wd-dashboard-course-link card-text">
                                    CS Mathematical foundation
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-courses col" style={{ width: "300px" }} >
                        <div className="card">
                            <img src="/images/hci.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "blueviolet", fontWeight: "bold"}}>
                                    CS5340 HCI
                                </a>
                                <p className="wd-dashboard-course-link card-text">
                                    Human-computer Interaction
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-courses col" style={{ width: "300px" }} >
                        <div className="card">
                            <img src="/images/db.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                   style={{textDecoration: "none", color: "crimson", fontWeight: "bold"}}>
                                    Database Management
                                </a>
                                <p className="wd-dashboard-course-link card-text">
                                    CS5200
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-courses col" style={{ width: "300px" }} >
                        <div className="card">
                            <img src="/images/nlp.jpg"/>
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                   href="#/Kanbas/Courses/1234/Home"
                                    style={{textDecoration: "none", color: "burlywood", fontWeight: "bold"}}>
                                    CS5760 NLP
                                </a>
                                <p className="wd-dashboard-course-link card-text">
                                  Natural Language Processing
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}