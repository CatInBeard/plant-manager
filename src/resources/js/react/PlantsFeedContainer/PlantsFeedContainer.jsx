import { useContext, useState } from "react";
import PlantsFeed from "./PlantsFeed/PlantsFeed";
import StoreContext from "../Store/StoreContext";

let PlantsFeedContainer = () => {
    let store = useContext(StoreContext)
    let state = store.getState();

    let plants = state.plants.plants;

    return <PlantsFeed plants={plants}/>;
}

export default PlantsFeedContainer;