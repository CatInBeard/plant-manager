import axios from "axios";
import {apiBasepath} from "../Settings/Path"

let updatePlant = async (plantID, data) => {
    let responce = await axios.patch(apiBasepath + "plants/" + plantID, data);
    return await responce.data;
} 

export default updatePlant;