export default function Destructing() {
    const person = { name: "john", age: 25 };
    const { name, age } = person;
    const numbers = ["one", "two", "three"];
    const [ first, second, third ] = numbers;
    return (
        <div id="wd-destructuring">
            <h2>Destructuring</h2>
            <h3>Object Destructuring</h3>
            const &#123; name, age &#125; = &#123; name: "john", age: 25 &#125;;<br /><br/>
            name = {name} <br />
            age = {age}
            <h3>Array Destructuring</h3>
            const [ first, second, third ] = ["one", "two", "three"];<br /><br/>
            first = {first} <br />
            second = {second} <br />
            third = {third} <hr />
        </div>
    );
}