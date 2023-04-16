import PlantEditing from "./PlantEditing/PlantEditing"
import StoreContext from "../Store/StoreContext";
import NotFound from "../NotFound/NotFound";
import { useContext, useEffect} from "react";
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import { basepath } from "../Settings/Path";
import NotificationContainer from "../NotificationContainer/NotificationContainer"
import updatePlant from "../API/updatePlant";
import getPlants from "../API/getPlants";
import Loading from "../Loading/Loading";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import APIDeletePlant from "../API/deletePlant"
import PhotoUpdaterContainer from "../PhotoUpdaterContainer/PhotoUpdaterContainer";
import updatePlantPhoto from "../API/updatePlantPhoto";


let PlantEditingContainer = () => {

    let store = useContext(StoreContext)
    let state = store.getState();

    let plants = state.plants.plants;

    const { id } = useParams();
    
    let updateName = (e) =>{
        let value = e.target.value
        store.dispatch({type: "EditPlant_updatePlantName", newValue: value});
    }

    let updateDescription = (e) =>{
        let value = e.target.value
        store.dispatch({type: "EditPlant_updatePlantDescription", newValue: value});
    }

    let updateWatering = (e) =>{
        let value = e.target.value
        store.dispatch({type: "EditPlant_updateWatering", newValue: value});
    }

    let submitForm = (e) =>{
        e.preventDefault()

        let fn = async () => {

            store.dispatch({type: "EditPlant_Notify", notificationText:"Updating...", notificationType:"info"});

            try{
                await updatePlant(state.editPlant.ID,
                {
                    name: state.editPlant.name,
                    description: state.editPlant.description,
                    watering_per_week: state.editPlant.watering
                });
            }
            catch{
                store.dispatch({type: "EditPlant_Notify", notificationText:"Sorry, something went wrong =(", notificationType:"danger"});
                return;
            }

            let plant = {
                id: state.editPlant.ID,
                name: state.editPlant.name,
                description: state.editPlant.description,
                week_watering_times: state.editPlant.watering
            };
            store.dispatch({type: "EditPlant_Submit", plant:{...plant}});

        }

        fn();

    }
    
    let navigate = useNavigate();

    useEffect(() => {
        if(state.editPlant.deleted){
            return navigate("/app");
        }
    })

    let deletePlant = (e) => {
        e.preventDefault()
        store.dispatch({type: "EditPlant_DisplayDeleteDialog"});
    }

    const ZeroPlant = plants.find(
        (element) => element.id == 0
    );

    if(ZeroPlant){
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

        fn();

        return <Loading/>
    }

    let deleteDialog;
    let photoUpdater;

    let cancelDeleteDialog = () => {
        store.dispatch({type: "EditPlant_HideDeleteDialog"});
    }

    let confirmDeleteDialog = () => {
        
        let fn = async () => {
            try{
                await APIDeletePlant(state.editPlant.ID);
            }
            catch(e){
                store.dispatch({type: "EditPlant_HideDeleteDialog"});
                store.dispatch({type: "EditPlant_Notify", notificationText:"Sorry, something went wrong =(", notificationType:"danger"});
                return;
            }
            store.dispatch({type: "EditPlant_PlantDeleted"});
        }

        fn();
    }

    let clickUpdatePhoto = () => {
        store.dispatch({type: "EditPlant_ShowNewPhotoDialog"});
    }

    let cancelUpdatePhoto = () => {
        store.dispatch({type: "EditPlant_HideNewPhotoDialog"});
    }

    let confirmUpdatePhoto = () => {

        let plantImage = document.getElementById("new_plant_image");
        let fn = async () => {
            let responce;
            try{
                responce = await updatePlantPhoto(state.editPlant.ID,plantImage.files[0]);
            }
            catch(e){
                store.dispatch({type: "EditPlant_Notify", notificationText:"Sorry, something went wrong =(", notificationType:"danger"});
            }

            console.log(responce)

            store.dispatch({type: "EditPlant_HideNewPhotoDialog"});
            store.dispatch({type: "EditPlant_Submit", plant:{...responce.data.plant}});
        }

        fn();

    }

    if(state.editPlant.deleteDialog){
        deleteDialog = <ConfirmDialog primaryAction={confirmDeleteDialog} cancelAction={cancelDeleteDialog} actionButtonText="delete" actionButtonType="danger" headerText="Confirm delition">
            Are you sure to delete this plant. You can't undo this action
        </ConfirmDialog>
    }

    if(state.editPlant.photoUpdater){
        photoUpdater = <PhotoUpdaterContainer primaryAction={confirmUpdatePhoto} cancelAction={cancelUpdatePhoto}/>;
    }

    const findedPlant = plants.find(
        (element) => element.id == id
    );

    if(findedPlant){
        let plant = {...findedPlant};
        if(state.editPlant.ID == plant.id){
            plant.name = state.editPlant.name;
            plant.description = state.editPlant.description;
            plant.care.week_watering_times = state.editPlant.watering;
        }
        else{
            store.dispatch({type: "EditPlant_setNewPlant", plant: plant});
        }

        return <>
            <Header>
                <h1>Edit {findedPlant.name} | <NavLink to={basepath}>Go back</NavLink></h1>
            </Header>
            <Main>
                {deleteDialog}
                {photoUpdater}
                <NotificationContainer type={state.editPlant.notificationType}>
                    {state.editPlant.notificationText}
                </NotificationContainer>
                <PlantEditing 
                plant={plant}
                updateName={updateName} 
                updateDescription={updateDescription}
                updateWatering={updateWatering}
                submitForm={submitForm}
                deletePlant={deletePlant}
                clickUpdatePhoto={clickUpdatePhoto}
                />
            </Main>
        </>
    }
    else{
        return <NotFound/>
    }
}

export default PlantEditingContainer;