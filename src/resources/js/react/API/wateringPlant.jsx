import axios from "axios";
import {apiBasepath} from "../Settings/Path"

let wateringPlant = async (plantID) => {
    let responce = await axios.post(apiBasepath + "plants/" + plantID + "/watering");
    return await responce.data;
} 

export default wateringPlant;