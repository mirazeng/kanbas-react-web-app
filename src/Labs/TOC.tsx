import { useLocation } from "react-router";

// export default function TOC() {
//     return (
//         <ul>
//             <li><a id='wd-a' href="#/Labs">Labs</a></li>
//             <li><a id='wd-a1' href="#/Labs/Lab1">Lab 1</a></li>
//             <li><a id='wd-a2' href="#/Labs/Lab2">Lab 2</a></li>
//             <li><a id='wd-a3' href="#/Labs/Lab3">Lab 3</a></li>
//             <li><a id='wd-k' href="#/Kanbas">Kanbas</a></li>
//             <li><a id="wd-github" href="https://github.com/mirazeng/kanbas-react-web-app">Miranda's Github</a></li>
//         </ul>
//     );
// }

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <a id="wd-a" href="#/Labs" className="nav-link">
                    Labs
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-a1" href="#/Labs/Lab1"
                   className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
                    Lab 1
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-a2" href="#/Labs/Lab2"
                   className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
                    Lab 2
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-a3" href="#/Labs/Lab3"
                   className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
                    Lab 3
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-k" href="#/Kanbas" className="nav-link">
                    Kanbas
                </a>
            </li>
            <li className="nav-item">
                <a id="wd-k" href="https://github.com/mirazeng/kanbas-react-web-app" className="nav-link">
                    Miranda's GitHub
                </a>
            </li>
        </ul>
    );
}
