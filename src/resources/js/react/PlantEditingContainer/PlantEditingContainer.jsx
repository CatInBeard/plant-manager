import PlantEditing from "./PlantEditing/PlantEditing"
import StoreContext from "../Store/StoreContext";
import NotFound from "../NotFound/NotFound";
import { useContext} from "react";
import { NavLink, useParams } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import { basepath } from "../Settings/Path";
import NotificationContainer from "../NotificationContainer/NotificationContainer"


let PlantEditingContainer = () => {

    let store = useContext(StoreContext)
    let state = store.getState();

    let plants = state.plants.plants;

    const { id } = useParams();
    
    let updateName = (e) =>{
        let value = e.target.value
        store.dispatch({type: "EditPlant_updatePlantName", newValue: value});
    }

    let updateDescription = (e) =>{
        let value = e.target.value
        store.dispatch({type: "EditPlant_updatePlantDescription", newValue: value});
    }

    let updateWatering = (e) =>{
        let value = e.target.value
        store.dispatch({type: "EditPlant_updateWatering", newValue: value});
    }

    let submitForm = (e) =>{
        e.preventDefault()
        let plant = {
            id: state.editPlant.ID,
            name: state.editPlant.name,
            description: state.editPlant.description,
            week_watering_times: state.editPlant.watering
        };
        store.dispatch({type: "EditPlant_Submit", plant:{...plant}});
    }

    const findedPlant = plants.find(
        (element) => element.id == id
    );

    if(findedPlant){
        let plant = {...findedPlant};
        if(state.editPlant.ID == plant.id){
            plant.name = state.editPlant.name;
            plant.description = state.editPlant.description;
            plant.care.week_watering_times = state.editPlant.watering;
        }
        else{
            store.dispatch({type: "EditPlant_setNewPlant", plant: plant});
        }

        return <>
            <Header>
                Edit {findedPlant.name} | <NavLink to={basepath}>Go back</NavLink>
            </Header>
            <Main>
                <NotificationContainer type={state.editPlant.notificationType}>
                    {state.editPlant.notificationText}
                </NotificationContainer>
                <PlantEditing 
                plant={plant}
                updateName={updateName} 
                updateDescription={updateDescription}
                updateWatering={updateWatering}
                submitForm={submitForm}
                />
            </Main>
        </>
    }
    else{
        return <NotFound/>
    }
}

export default PlantEditingContainer;