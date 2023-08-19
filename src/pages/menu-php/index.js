import { Link, Outlet } from "react-router-dom";

import Main from "../../component/main";

export default function MenuPhp() {
    return (
        <Main title={"PHP"} >

            <details>
                <summary>Les bases de PHP</summary>
                <ul>
                    <li> On vient placer le code PHP entre les balises <code>&lt;?php</code> et <code>?&gt;</code>&nbsp;; </li>
                    <li> Si un fichier contient exclusivement du PHP, on peut omettre <code>?&gt;</code>. </li>
                    <li> On utilise <code>echo</code>, une fonction PHP permettant d'afficher du texte&nbsp;; </li>
                    <li> On termine notre instruction par <code>;</code>. Cela permet de délimiter chaque instruction. </li>
                    <li>
                        <code>
                            <span>&lt;?php</span>
                            <span >// Affiche : Hello, World!</span>
                            <span >echo"Hello, World!";</span>
                        </code>
                    </li>
                    <li>Pour voir ce qu'il y a dans une variable, on peut utiliser la fonction <code>var_dump</code>.</li>
                    <li>
                        <code >
                            <span>&lt;?php</span>
                            <span >$age=32;</span>
                            <span >$prenom="Lucie";</span>

                            <span >/* Affiche le type de donnée et le contenu */</span>
                            <span >// String(5) Lucie = une string de 5 caractères de long, "Lucie"</span>
                            <span >var_dump($prenom);</span>

                            <span >// Int(32) = un nombre entier, 32</span>
                            <span >var_dump($age);</span>
                        </code>
                    </li>
                </ul>
            </details>

            <nav>
                <ul>
                    <li> <Link to={"variables"}>variables</Link> </li>
                    <li> <Link to={"class"}>class</Link> </li>
                    <li> <Link to={"fonction"}>fonction</Link> </li>
                </ul>
            </nav>

            <Outlet/>

        </Main>
    )
}