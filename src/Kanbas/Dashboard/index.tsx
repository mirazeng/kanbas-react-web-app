export default function Dashboard() {
    return (
        <div id="ws-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-pulished">Published Courses (12)</h2> <hr/>
            <div id="wd-dashboard-courses">

                <div className="wd-dashboard-courses">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </a>
                        <p className="wd-dashboard-course-link">
                            Full Stack Software Development
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-courses">
                    <img src="/images/data-structure.png" width={200}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5008 Data Structure and Algorithm
                        </a>
                        <p className="wd-dashboard-course-link">
                            Models of computing and system software
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-courses">
                    <img src="/images/ood.png" width={200}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5004 Object Oriented Design
                        </a>
                        <p className="wd-dashboard-course-link">
                            Intensive tour of class-based program design
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-courses">
                    <img src="/images/web-dev.jpg" width={200}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5610 Website Development
                        </a>
                        <p className="wd-dashboard-course-link">
                            Web technologies used to develop Website
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-courses">
                    <img src="/images/discrete-math.png" width={200}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5002 Discrete Structures and Math
                        </a>
                        <p className="wd-dashboard-course-link">
                            Mathematical structures that form the foundation of CS
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-courses">
                    <img src="/images/hci.png" width={200}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5340 Human Computer Interaction
                        </a>
                        <p className="wd-dashboard-course-link">
                            Computer systems support human beings in day-to-day tasks
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-courses">
                    <img src="/images/db.jpg" width={200}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5200 Database Management
                        </a>
                        <p className="wd-dashboard-course-link">
                            MySQL Database Management and Implementation
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>

                <div className="wd-dashboard-courses">
                    <img src="/images/nlp.jpg" width={200}/>
                    <div>
                        <a className="wd-dashboard-course-link"
                           href="#/Kanbas/Courses/1234/Home">
                            CS5760 Natural Language Processing
                        </a>
                        <p className="wd-dashboard-course-link">
                            Modern neural network algorithms for the processing of linguistic information
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
            </div>
        </div>
    );
}