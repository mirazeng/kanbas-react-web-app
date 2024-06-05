import {FaFileExport, FaFileImport} from "react-icons/fa";
import {FaGear} from "react-icons/fa6";

export default function GradesControls() {
    return (
        <div id="wd-grades-controls" className="float-end text-nowrap">
            <button id="wd-file-import"
                    className="btn btn-secondary text-nowrap me-2">
                <FaFileImport className="me-2 fs-5"/>
                Import
            </button>

            <div className="dropdown d-inline me-2">
                <button id="wd-file-export"
                        className="btn btn-secondary
                                   dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown">
                    <FaFileExport className="me-2 fs-5"/>
                    Export
                </button>
                <ul className="dropdown-menu">
                    <a id="wd-export-grades" className="dropdown-item" href="#">
                        Export
                    </a>
                </ul>
            </div>

            <button className="btn btn-secondary justify-content-around">
                <FaGear className="me-0 fs-5"/>
            </button>
        </div>
    );
}