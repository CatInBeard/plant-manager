import { NavLink } from "react-router-dom";
import { plantEditingPath } from "../../Settings/Path";
import s from "./PlantView.module.css"
import LastWateringComponent from "../../LastWaterComponent/LastWaterComponent";

let PlantView = ({
    plant,
    wateringClick
}) => {


return <div className="card my-3 p-3">
        <div className="row">
            <div className="col">
                <div className="d-flex flex-column">
                    <img className={s.main_image} src={plant.photo}></img>
                </div>
            </div>
            <div className="col">
                <div className="d-flex flex-column">
                    <div className="p-2">
                        <h2>
                            {plant.name}
                        </h2>
                    </div>
                    <div className="p-2">
                        {plant.description}
                    </div>
                    <div className="p-2">
                            Waterings per week: {plant.care.week_watering_times}
                    </div>
                    <div>
                        <LastWateringComponent watering={plant.care.last_waterings} />
                    </div>
                    <div className="p-2">
                        <div className="btn btn-primary m-1" data-plant-id={plant.id} onClick={wateringClick}>Mark watered</div> 
                        <NavLink to={plantEditingPath[0] + plant.id + plantEditingPath[1]} className="btn btn-secondary m-1">Edit</NavLink>
                        {plant.care.last}
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default PlantView;