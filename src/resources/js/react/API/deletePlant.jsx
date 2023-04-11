import axios from "axios";
import {apiBasepath} from "../Settings/Path"

let deletePlant = async (plantID) => {
    let responce = await axios.delete(apiBasepath + "plants/" + plantID);
    return await responce.data;
} 

export default deletePlant;