export default function Forloops() {
    let stringArray1 = ["string1", "string3"];
    let stringArray2 = [];
    for (let i = 0; i < stringArray1.length; i++) {
        const string1 = stringArray1[i];
        stringArray2.push(string1.toUpperCase());
    }
    return (
        <div id="wd-for-loops">
            <h4>For loops</h4>
            stringArray1 = {stringArray2}<hr/>
        </div>
    )
}