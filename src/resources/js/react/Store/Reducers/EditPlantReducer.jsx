import { NavLink } from "react-router-dom";
import EditPlantState from "./InitialStates/EditPlantState"

let EditPlantReducer = (state = EditPlantState, action) => {
    
    switch(action.type){
        case "EditPlant_setNewPlant":
            state.ID = action.plant.id;
            state.name = action.plant.name;
            state.description = action.plant.description;
            state.watering = action.plant.care.week_watering_times;
            state.notificationText = ""
        break;
        case "EditPlant_updatePlantName":
            state.name = action.newValue;
        break;
        case "EditPlant_updatePlantDescription":
            state.description = action.newValue;
        break;
        case "EditPlant_updateWatering":
            state.watering = action.newValue;
        break;
        case "EditPlant_Submit":
            state.notificationText = "Plant succesfully updated!"
            state.notificationType = "success"
        break;
        case "EditPlant_Notify":
            state.notificationText = action.notificationText;
            state.notificationType = action.notificationType;
        break;
    }
    return state;
}

export default EditPlantReducer