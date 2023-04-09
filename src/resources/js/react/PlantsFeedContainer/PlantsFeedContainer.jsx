import { useContext, useEffect } from "react";
import PlantsFeed from "./PlantsFeed/PlantsFeed";
import StoreContext from "../Store/StoreContext";
import getPlants from "../API/getPlants"

let PlantsFeedContainer = () => {

    let store = useContext(StoreContext)
    let state = store.getState();

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

    return <PlantsFeed plants={plants}/>;
}

export default PlantsFeedContainer;