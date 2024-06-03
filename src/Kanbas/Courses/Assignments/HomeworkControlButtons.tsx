import { IoEllipsisVertical } from "react-icons/io5";
import {FaCheckCircle, FaCircle} from "react-icons/fa";

export default function HomeworkControlButtons() {
    return (
        <div className="float-end">
            <span className="me-5 position-relative">
            <FaCheckCircle style={{top: "1px"}}
                           className="text-success me-1 position-absolute fs-3"/>
            <FaCircle className="text-white me-1 fs-6"/>
            </span>
            <IoEllipsisVertical className="fs-4"/>
        </div>
    );
}