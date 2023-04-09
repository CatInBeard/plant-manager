import { NavLink } from "react-router-dom";
import PlantsState from "./InitialStates/PlantsState"

let PlantsReducer = (state = PlantsState, action) => {
    switch(action.type){
        case "EditPlant_Submit":
            let plant =  {...action.plant};

            let findedPlant = state.plants.find(
                (element) => {
                    
                    return element.id == plant.id
                }
            );
            
            if(findedPlant){
                findedPlant.name = plant.name;
                findedPlant.description = plant.description;
                findedPlant.care.week_watering_times = plant.watering;
                
            }
        break;
        case "updatePlants":
            state.plants = action.plants;
        break;
    }
    return state;
}

export default PlantsReducer