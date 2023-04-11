import { useContext, useEffect } from "react";
import PlantsFeed from "./PlantsFeed/PlantsFeed";
import StoreContext from "../Store/StoreContext";
import getPlants from "../API/getPlants"
import wateringPlant from "../API/wateringPlant";

let PlantsFeedContainer = () => {

    let store = useContext(StoreContext)
    let state = store.getState();

    let wateringClick = (e) => {

        let plantID = e.target.attributes['data-plant-id'].value

        let fn = async () => {
            try{
                await wateringPlant(plantID);
            }
            catch{
                console.error("Can't access API")
                return;
            }
            store.dispatch({type: "addWatering", plantID : plantID })
        }

        fn();
    }

    useEffect( 
        () => {
           let fn = async () => {
                try{
                    var result = await getPlants("Saint-Petersburg")
                }
                catch{
                    console.error("Can't access API")
                    return;
                }

                if(result.status == "ok"){
                    store.dispatch({type: "updatePlants", plants : [...result.data.plants] })
                }
                else{
                    console.error("API responce not ok")
                }
            }

            fn()
            
    }, [])

    let plants = state.plants.plants;

    return <PlantsFeed plants={plants} wateringClick={wateringClick}/>;
}

export default PlantsFeedContainer;