import Assignments from "./index";

export default function AssignmentEditor() {
    return (
        <div id='wd-assignment-editor'>
            <label htmlFor="wd-name">Assignment Name</label>
            <br/>
            <br/>
            <input id="wd-name" value="A1 - ENV + HTML"/>
            <br/><br/>
            <textarea id="wd-description" cols={40} rows={10}>
                The assignment is available online Submit
                a link to the landing page of your web application
                running on Netlify. The landing page should include
                the following: Your full name and section Links
                to each of the lab assignments Link to the Kanbas
                application Links to all relevant source code repositories
                The Kanbas application should include a link to navigate
                back to the landing page.
            </textarea>
            <br/>
            <br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100}/>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option value="ASSIGNMENT">ASSIGNMENT</option>
                        </select>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td align="right" valign="top">
                    <label htmlFor="wd-display-grades-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grades-as">
                            <option value="Percentage">Percentage</option>
                        </select>
                    </td>
                </tr>
                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>

                    <td align="left" valign="top">
                        <select id="wd-submission-type">
                            <option value="Online">Online</option>
                        </select>
                        <br/>
                        <br/>
                        <label htmlFor="wd-online-entry-options">Online Entry Options</label>
                        <td align="left" valign="top">
                            <input type="checkbox" name="submission-type" id="wd-text-entry"/>
                            <label htmlFor="wd-text-entry">Text Entry</label><br/>

                            <input type="checkbox" name="submission-type" id="wd-website-url"/>
                            <label htmlFor="wd-website-url">Website URL</label><br/>

                            <input type="checkbox" name="submission-type" id="wd-media-recordings"/>
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                            <input type="checkbox" name="submission-type" id="wd-student-annotation"/>
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                            <input type="checkbox" name="submission-type" id="wd-file-upload"/>
                            <label htmlFor="wd-file-upload">File Uploads</label><br/>
                        </td>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign">Assign</label>
                    </td>
                    <td>
                            <label htmlFor="wd-assign-to">Assign to</label>
                        <td>
                            <input id="wd-assign-to" value="everyone"/>
                        </td>
                        <br/>
                            <label htmlFor="wd-due-date">Due</label>
                        <td>
                            <input type="date" id="wd-due-date" value="2024-05-13"/>
                        </td>
                        <br/>
                        <tr>
                            <td>
                                <label htmlFor="wd-available-from">Available from</label>
                            </td>
                            <td>
                                <label htmlFor="wd-available-until">Until</label>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="date" id="wd-available-from" value="2024-05-06"/>
                            </td>
                            <td>
                                <input type="date" id="wd-available-until" value="2024-05-20"/>
                            </td>
                        </tr>
                    </td>
                </tr>
            </table>
            <hr/>
            <div>
                <button id="wd-cancel">Cancel</button> <button id="wd-save">Save</button>
            </div>
        </div>
    );
}