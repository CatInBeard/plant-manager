import { apiBasepath } from "../Settings/Path";

let updatePlantPhoto = async (plantID, image) => {

    let formData = new FormData();
    formData.append("image", image);

    let responce = await axios.post(apiBasepath + "plants/" + plantID + "/photo", formData, {
        headers: {
        'Content-Type': 'multipart/form-data'
        }
    })
    return await responce.data;

}

export default updatePlantPhoto;