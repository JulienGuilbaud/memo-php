import {Outlet} from "react-router-dom";
import Header from "../header";


export default function Root(){
    return(
        <>
        <Header/>
        <Outlet/>
        <div>footer</div>
        </>
    )
}