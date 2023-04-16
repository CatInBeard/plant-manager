
import StoreContext from "../Store/StoreContext";
import NotificationContainer from "../NotificationContainer/NotificationContainer"
import PlantView from "./PlantView/PlantView";
import { useContext,useEffect} from "react";
import { NavLink,useParams } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import { basepath } from "../Settings/Path";
import wateringPlant from "../API/wateringPlant";

let PlantViewContainer = () => {

    let wateringClick = (e) => {

        let plantID = e.target.attributes['data-plant-id'].value

        let fn = async () => {
            try{
                await wateringPlant(plantID);
            }
            catch{
                console.error("Can't access API")
                return;
            }
            store.dispatch({type: "addWatering", plantID : plantID })
        }

        fn();
    }
    
    let store = useContext(StoreContext)
    let state = store.getState();

    const { id } = useParams();

    let plants = state.plants.plants;

    const findedPlant = plants.find(
        (element) => element.id == id
    );

    let plant;

    if(!findedPlant){

    }
    else{
        plant = {...findedPlant};
    }

    return <>
            <Header>
                <h1> {plant.name} | <NavLink to={basepath}>Go back</NavLink></h1>
            </Header>
            <Main>
                <NotificationContainer type={state.viewPlant.notificationType}>
                    {state.viewPlant.notificationText}
                </NotificationContainer>
                <PlantView 
                plant={plant} wateringClick={wateringClick}
                />
            </Main>
        </>

}

export default PlantViewContainer;