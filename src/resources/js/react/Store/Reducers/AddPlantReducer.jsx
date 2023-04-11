import { NavLink } from "react-router-dom";
import AddPlantState from "./InitialStates/AddPlantState"

let AddPlantReducer = (state = AddPlantState, action) => {
    
    switch(action.type){
        case "AddPlant_updatePlantName":
            state.name = action.newValue;
        break;
        case "AddPlant_updatePlantDescription":
            state.description = action.newValue;
        break;
        case "AddPlant_updateWatering":
            state.watering = action.newValue;
        break;
        case "AddPlant_Submit":
            state.notificationText = "Plant succesfully added!"
            state.notificationType = "success"
            state.name = "";
            state.description = "";
            state.watering = 0;
        break;
        case "AddPlant_Notify":
            state.notificationText = action.notificationText;
            state.notificationType = action.notificationType;
        break;
    }
    return state;
}

export default AddPlantReducer