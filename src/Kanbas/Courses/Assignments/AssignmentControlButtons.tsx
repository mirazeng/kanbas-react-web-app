import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end">
            <span className="wd-rounded-corners-all-around
                                         wd-border-thin
                                         wd-border-solid
                                         me-2">
                            40% of Total
                        </span>
            <FaPlus className="me-1 fs-4" />
            <IoEllipsisVertical className="me-1 fs-4"/>
        </div>
    )
}