import GradesControls from "./GradesControls";
import {HiMagnifyingGlass} from "react-icons/hi2";
import {FiFilter} from "react-icons/fi";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

export default function Grades() {
    return (
        <div id="wd-grades">
            <br/>
            <GradesControls/>
            <br/> <br/>
            <div className="row mb-3">
                <div className="col mb-3">
                    <label htmlFor="wd-search-student-name" className="form-label fw-bold fs-5">
                        Student Names
                    </label>
                    <div className="input-group">
                            <span className="input-group-text">
                                <HiMagnifyingGlass/>
                            </span>
                        <input id="wd-search-student-name" className="form-control" type="text"
                               placeholder="Search Students"/>
                        <span className="input-group-text">
                                <MdOutlineKeyboardArrowDown/>
                        </span>
                    </div>
                </div>
                <div className="col mb-3">
                    <label htmlFor="wd-search-assignment-name" className="form-label fw-bold fs-5">
                        Assignment Names
                    </label>
                    <div className="input-group">
                            <span className="input-group-text">
                                <HiMagnifyingGlass/>
                            </span>
                        <input id="wd-search-assignment-name" className="form-control" type="text"
                               placeholder="Search Assignments"/>
                        <span className="input-group-text">
                                <MdOutlineKeyboardArrowDown/>
                        </span>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12 mb-4">
                    <button type="button" className="btn btn-secondary me-2">
                        <FiFilter className="me-1"/>
                        Apply Filters
                    </button>
                </div>

                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">Student Name</th>
                                <th scope="col">A1 SETUP<br/>Out of 100</th>
                                <th scope="col">A2 HTML<br/>Out of 100</th>
                                <th scope="col">A3 CSS<br/>Out of 100</th>
                                <th scope="col">A4 BOOTSTRAP<br/>Out of 100</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Jane Adams</td>
                                <td>100%</td>
                                <td>96.67%</td>
                                <td>92.18%</td>
                                <td>66.22%</td>
                            </tr>
                            <tr>
                                <td>Christina Allen</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>Sameera Ansari</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>Han Bao</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>88.03%</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>Mahi Sai Srinivas Bobbili</td>
                                <td>100%</td>
                                <td>96.67%</td>
                                <td>98.37%</td>
                                <td>98.99%</td>
                            </tr>
                            <tr>
                                <td>Siran Cao</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>100%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
