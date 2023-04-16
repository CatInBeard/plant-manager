import s from "./PlantsFeed.module.css";
import { NavLink } from "react-router-dom";
import {plantEditingPath, plantViewPath} from "../../Settings/Path";
import NotificationContainer from "../../NotificationContainer/NotificationContainer";
import Loading from "../../Loading/Loading";
import LastWateringComponent from "../../LastWaterComponent/LastWaterComponent";

let PlantsFeed = ({plants = [], wateringClick}) => {

    if(plants < 1){
        return <NotificationContainer type="info">
                    You don't have any plants
                </NotificationContainer>
    }

    let plantsElements = plants.map(
        (plant) => {
            if(plant.id == 0){
            return <Loading/>
            }
            

            return <div className="card my-3 p-3">
                    <div className="row">
                        <div className="col">
                            <img className={s.feedImage} src={plant.photo}></img>
                        </div>
                        <div className="col">
                            <div className="d-flex flex-column">
                                <div className="p-2">
                                    <h2>{plant.name}</h2>
                                </div>
                                <div className="p-2">
                                    {plant.description}
                                </div>
                                <div className="p-2">
                                    Water {plant.care.week_watering_times} times a week
                                </div>
                                <LastWateringComponent watering={plant.care.last_waterings} />
                                <div className="p-2">
                                    <div className="btn btn-primary m-1" data-plant-id={plant.id} onClick={wateringClick}>Mark watered</div> 
                                    <NavLink to={plantEditingPath[0] + plant.id + plantEditingPath[1]} className="btn btn-secondary  m-1">Edit plant</NavLink>
                                    <NavLink to={plantViewPath + plant.id} className="btn btn-info  m-1">Plant info</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
    );

    return <>{plantsElements}</>
}

export default PlantsFeed;