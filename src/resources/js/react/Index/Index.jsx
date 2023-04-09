import { useContext } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import StoreContext from "../Store/StoreContext";
import PlantsFeedContainer from "../PlantsFeedContainer/PlantsFeedContainer";

let Index = () => {

    let store = useContext(StoreContext)
    let state = store.getState()

    return (<div>   
        <Header>
            <h1>Plant manager</h1>
        </Header>
        <Main>
                <PlantsFeedContainer/>
        </Main>
    </div>)
}

export default Index;