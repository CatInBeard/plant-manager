import { NavLink } from "react-router-dom";
import ViewPlantState from "./InitialStates/ViewPlantState"

let ViewPlantReducer = (state = ViewPlantState, action) => {
    
    switch(action.type){

        case "ViewPlant_setNotfound":
            state.notFoundID = action.ID
        break;

    }
    return state;
}

export default ViewPlantReducer