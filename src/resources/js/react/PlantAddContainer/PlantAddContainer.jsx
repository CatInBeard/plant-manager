
import StoreContext from "../Store/StoreContext";
import NotificationContainer from "../NotificationContainer/NotificationContainer"
import PlantAdd from "./PlantAdd/PlantAdd";
import { useContext} from "react";
import { NavLink } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import { basepath } from "../Settings/Path";
import addPlant from "../API/addPlant";

let PlantAddContainer = () => {

    let store = useContext(StoreContext)
    let state = store.getState();

    
    let updateName = (e) =>{
        let value = e.target.value
        store.dispatch({type: "AddPlant_updatePlantName", newValue: value});
    }

    let updateDescription = (e) =>{
        let value = e.target.value
        store.dispatch({type: "AddPlant_updatePlantDescription", newValue: value});
    }

    let updateWatering = (e) =>{
        let value = e.target.value
        store.dispatch({type: "AddPlant_updateWatering", newValue: value});
    }

    let submitForm = (e) =>{
        e.preventDefault()

        let fn = async () => {

            store.dispatch({type: "AddPlant_Notify", notificationText:"Creating...", notificationType:"info"});

            try{
                await addPlant(
                {
                    name: state.addPlant.name,
                    description: state.addPlant.description,
                    watering_per_week: state.addPlant.watering
                });
            }
            catch{
                store.dispatch({type: "AddPlant_Notify", notificationText:"Sorry, something went wrong =(", notificationType:"danger"});
                return;
            }

            store.dispatch({type: "AddPlant_Submit"});
        }

        fn();

    }

    let plant = {
        name: state.addPlant.name,
        description: state.addPlant.description,
        care:{ 
            week_watering_times:state.addPlant.watering
        }
    };

    return <>
            <Header>
                <h1> Add new plant | <NavLink to={basepath}>Go back</NavLink></h1>
            </Header>
            <Main>
                <NotificationContainer type={state.addPlant.notificationType}>
                    {state.addPlant.notificationText}
                </NotificationContainer>
                <PlantAdd 
                plant={plant}
                updateName={updateName} 
                updateDescription={updateDescription}
                updateWatering={updateWatering}
                submitForm={submitForm}
                />
            </Main>
        </>
}

export default PlantAddContainer;