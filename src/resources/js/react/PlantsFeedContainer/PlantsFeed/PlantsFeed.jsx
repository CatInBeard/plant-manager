import s from "./PlantsFeed.module.css";
import { NavLink } from "react-router-dom";
import {plantEditingPath} from "../../Settings/Path";

let PlantsFeed = ({plants}) => {

    let plantsElements = plants.map(
        (plant) => {

            let watering_elemnt;
            if(plant.care.last_waterings.length < 1 || plant.care.last_waterings == undefined){
                watering_elemnt = "";
            }
            else{
                plant.care.last_waterings.sort(
                    (a,b) => {
                        return a.id < b.id
                    }
                );
                watering_elemnt = 
                    <div className="p-2">
                        Last water: {plant.care.last_waterings[0].date}
                    </div>;
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
                                {watering_elemnt}
                                <div className="p-2">
                                    <div className="btn btn-primary m-1">Mark watered</div> 
                                    <NavLink to={plantEditingPath + + plant.id} className="btn btn-secondary  m-1">Edit</NavLink>
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