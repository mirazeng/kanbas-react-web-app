const hello = () => {
    alert('Hello, world!');
};

const lifeIS = (good: string) => {
    alert(`Life is ${good}`);
};

export default function ClickEvent() {
    return (
        <div id = "wd-click-event">
            <h3>Click Event</h3>
                <button onClick={hello} id="wd-hello-world-click">Hello World!</button>
                <button onClick={() => lifeIS('good')} id="wd-life-is-good-click">Life is Good</button>
                <button onClick={() => {
                    hello();
                    lifeIS("Great!");
                }} id="wd-life-is-great-click">Life is Great
                </button>
            <hr />
        </div>
    );
}