import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import StoreContext from "../Store/StoreContext";

let Index = () => {

    let store = useContext(StoreContext)
    let state = store.getState()

    return (<div>   
        <Header>
            <h1>Plant manager</h1>
        </Header>
        <Main>
                Plant managment app will be there!
        </Main>
    </div>)
}

export default Index;