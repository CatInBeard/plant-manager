import axios from "axios";
import {apiBasepath} from "../Settings/Path"

let addPlant = async (data) => {
    let responce = await axios.post(apiBasepath + "plants", data);
    return await responce.data;
} 

export default addPlant;