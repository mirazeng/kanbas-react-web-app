export default function VariablesAndConstants() {
    let numberVariable = 123;
    let floatingPointVariable = 234.345;
    let stringVariable = "Hello World!";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;

    return(
        <div id="wd-variables-types">
            <h4>Variables Types</h4>
            numberVariable: {numberVariable}<br />
            floatingPointVariable: {floatingPointVariable}<br />
            stringVariable: {stringVariable}<br />
            booleanVariable: {booleanVariable + ""}<br />
            isNumber: {isNumber}<br />
            isString: {isString}<br />
            isBoolean: {isBoolean}<hr />
        </div>
    );
}