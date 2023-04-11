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
        case "addWatering":
            let Plant = state.plants.find(
                (element) => {
                    return element.id == action.plantID
                }
            );
            if(Plant){

                Plant.care.last_waterings.sort(
                    (a,b) => {
                        return a.id < b.id
                    }
                );

                let wateringID = 1;

                if(Plant.care.last_waterings[0]){
                    wateringID = Plant.care.last_waterings[0].id;
                }

                Plant.care.last_waterings.push({id: 0, date: (new Date()).toISOString()})
            }
        break;
    }
    return state;
}

export default PlantsReducer