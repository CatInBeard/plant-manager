import axios from "axios";
import {apiBasepath} from "../Settings/Path"

let getPlants = async () => {
    let responce = await axios.get(apiBasepath + "plants");
    return await responce.data;
} 

export default getPlants;