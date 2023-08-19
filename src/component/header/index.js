import {Link} from "react-router-dom";

export default function Header()
{return (
    <header>
        <h1>STAGE CA/CP</h1>
        <nav>
            <ul>
                <li> <Link to={"/menu-php"}>Menu base PHP</Link> </li>
                <li> <Link to={"/menu-php-unit"}>Menu base PHPunit</Link> </li>
                <li> <Link to={"/menu-laravel"}>Menu base LARAVEL</Link> </li>
            </ul>
        </nav>
    </header>
)}