import { useContext } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import StoreContext from "../Store/StoreContext";
import PlantsFeedContainer from "../PlantsFeedContainer/PlantsFeedContainer";
import { NavLink } from 'react-router-dom';
import { plantAddPath } from "../Settings/Path";

let Index = () => {

    let store = useContext(StoreContext)
    let state = store.getState()

    return (<div>   
        <Header>
            <div className="container">
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                    <h1>Plant manager</h1>
                    </div>
                    <div className="col justify-content-end d-flex">
                        <div>
                            <NavLink className="btn btn-lg btn-success mb-2" to={plantAddPath}>Add new</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
        <Main>  
                <PlantsFeedContainer/>
        </Main>
    </div>)
}

export default Index;