
export default function AssignmentEditor() {
    return (
        <div id='wd-assignment-editor'>
            <div className="col mb-3 ps-2">
                <label htmlFor="wd-name" className="row-sm-5 row-form-label">
                    Assignment Name
                </label>
                <div className="row-sm-5">
                    <input id="wd-name" className="form-control" value="A1"/>
                </div>
            </div>
            <br/>
            <div id="wd-description">
                <div className="mb-3 row ps-2">
                    <div className="row-cols-sm-5 row-form-label">
                        <textarea className="form-control" id="wd-description" rows={15}>
                            The assignment is available online
                            Submit a link to the landing page of your web application running on Netlify
                            The landing page should include
                            the following: Your full name and section Links
                            to each of the lab assignments Link to the Kanbas
                            application Links to all relevant source code repositories
                            The Kanbas application should include a link to navigate
                            back to the landing page.
                        </textarea>
                    </div>
                </div>
            </div>
            <br/>
            <form>
                <div className="row mb-3 ps-2">
                    {/* Make sure that the texts are positioned to the right side*/}
                    <div className="col text-end">
                        <label htmlFor="wd-points"
                               className="col-form-label">
                            Points
                        </label>
                    </div>
                    <div className="col">
                        <input id="wd-points" className="form-control" value={100}/>
                    </div>
                </div>

                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-group" className="col-form-label">
                            Assignment Group
                        </label>
                    </div>
                    <div className="col">
                        <select id="wd-group" className="form-select">
                            <option value="ASSIGNMENT">ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-display-grades-as" className="col-form-label">
                            Display Grade as
                        </label>
                    </div>
                    <div className="col text-end">
                        <select id="wd-display-grades-as" className="form-select">
                            <option value="Percentage">Percentage</option>
                        </select></div>
                </div>
                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-submission-type" className="col-form-label">
                            Submission Type
                        </label>
                    </div>
                    <div
                        className="col"> {/*This seemingly extra container is vital for making sure all things are aligned.*/}
                        <div className="card">
                            <div className="card-body">
                                <select id="wd-submission-type" className="form-select ">
                                    <option value="Online">Online</option>
                                </select>

                                <label htmlFor="wd-online-dropdown" className="col-sm-7 col-form-label">
                                    Online Entry Options
                                </label>
                                <div className="col-sm-7">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="textEntry"/>
                                        <label className="form-check-label" htmlFor="textEntry">
                                            Text Entry
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="websiteUrl"
                                               checked/>
                                        <label className="form-check-label" htmlFor="websiteUrl">
                                            Website URL
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="mediaRecordings"/>
                                        <label className="form-check-label" htmlFor="mediaRecordings">
                                            Media Recordings
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="studentAnnotation"/>
                                        <label className="form-check-label" htmlFor="studentAnnotation">
                                            Student Annotation
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="fileUploads"/>
                                        <label className="form-check-label" htmlFor="fileUploads">
                                            File Uploads
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mb-3 ps-2">
                    <div className="col text-end">
                        <label htmlFor="wd-assign" className="col-form-label">
                            Assign
                        </label>
                    </div>

                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="col">
                                    <div className="col">
                                        <label htmlFor="wd-assign-to" className="col-form-label">
                                            Assign to
                                        </label>
                                    </div>
                                    <div className="col">
                                        <input id="wd-assign-to" className="form-control" value="everyone"/>
                                    </div>
                                </div>
                                <br/>
                                <div className="col">
                                    <div className="col">
                                        <label htmlFor="wd-due-date"
                                               className="col-form-label">
                                            Due
                                        </label>
                                    </div>
                                    <div className="col">
                                        <input id="wd-due-date"
                                               className="form-control"
                                               type="date"
                                               value="2024-05-13"/>
                                    </div>
                                    <br/>
                                </div>
                                <div className="col text-nowrap">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="wd-available-from"
                                                   className="col-form-label">
                                                Available from
                                            </label>
                                            <input id="wd-available-from"
                                                   className="form-control"
                                                   type="date"
                                                   value="2024-05-06"/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="wd-available-until"
                                                   className="col-form-label">
                                                Until
                                            </label>
                                            <input id="wd-available-until"
                                                   className="form-control"
                                                   type="date"
                                                   value="2024-05-20"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <hr/>
            <div className={"row float-end"}>
                <div className={"col"}>
                    <button id="wd-cancel" className={"btn btn-lg btn-secondary me-2"}>Cancel</button>
                    <button id="wd-save" className={"btn btn-lg btn-danger"}>Save</button>
                </div>
            </div>
        </div>
    );
}