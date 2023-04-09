import PlantEditing from "./PlantEditing/PlantEditing"
import StoreContext from "../Store/StoreContext";
import NotFound from "../NotFound/NotFound";
import { useContext} from "react";
import { useParams } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";

let PlantEditingContainer = () => {

    let store = useContext(StoreContext)
    let state = store.getState();

    let plants = state.plants.plants;

    const { id } = useParams();
    
    let plant; 
    if(plant = plants.find(
        (element) => element.id == id
    )){
        return <>
            <Header>
                Edit {plant.name}
            </Header>
            <Main>
                <PlantEditing plant={plant}/>
            </Main>
        </>
    }
    else{
        return <NotFound/>
    }
}

export default PlantEditingContainer;