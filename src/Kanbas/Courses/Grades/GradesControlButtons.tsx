import {FaFileExport, FaFileImport} from "react-icons/fa";
import {FaGear} from "react-icons/fa6";


export default function GradesControlButtons() {
    return (
        <div className="float-end">
            <button className="btn btn-lg btn-secondary text-nowrap me-2">
                <FaFileImport className="me-1 fs-5"/>
                Import
            </button>

            <button className="dropdown d-inline me-2
                               btn btn-lg btn-secondary
                               dropdown-toggle"
                    type="button" data-bs-toggle="dropdown">
                <FaFileExport className="me-1 fs-5"/>
                Export
            </button>

            <button className="btn btn-lg btn-secondary justify-content-around">
                <FaGear className="me-1 fs-3"/>
            </button>
        </div>
    )
}