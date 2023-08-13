
import StoreContext from "../Store/StoreContext";
import { useContext,useEffect} from "react";
import { NavLink,useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";

import { basepath } from "../Settings/Path";


let ProfileContainer = () => {
    return <>
        <Header>
            <h1> Profile | <NavLink to={basepath}>Go back</NavLink></h1>
        </Header>
        <Main>
            <a href="/logout" className="btn btn-lg btn-danger">Logout</a>
        </Main>
    </>
}

export default ProfileContainer;