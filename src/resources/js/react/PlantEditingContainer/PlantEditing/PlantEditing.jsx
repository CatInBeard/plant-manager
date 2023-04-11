import s from "./PlantEditing.module.css"

let PlantEditing = ({
                    plant,
                    updateName,
                    updateDescription,
                    updateWatering,
                    submitForm,
                    deletePlant}) => {

    return <div className="card my-3 p-3">
        <div className="row">
            <div className="col">
                <img className={s.main_image} src={plant.photo}></img>
            </div>
            <div className="col">
                <form onSubmit={submitForm}>
                    <div className="d-flex flex-column">
                        <div className="p-2 form-group">
                            <label for="plant_name">
                                Plant name:
                            </label>
                            <input onChange={updateName} className="form-control" id="plant_name" name="plant_name" type="text" value={plant.name}/>
                        </div>
                        <div className="p-2 form-group">
                            <label for="plant_description">
                                Description:
                            </label>
                            <textarea onChange={updateDescription} className="form-control" id="plant_description" name="plant_description">{plant.description}</textarea>
                        </div>
                        <div onChange={updateWatering} className="p-2 form-group">
                            <label for="week_watering_times">
                                Waterings per week:
                            </label>
                            <input className="form-control" id="week_watering_times" name="week_watering_times" type="number" min="0" value={plant.care.week_watering_times}/>
                        </div>
                        <div className="p-2 form-group">
                            <input type="submit" className="btn btn-primary" value="save"/> <button className="btn btn-danger" onClick={deletePlant}>delete</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default PlantEditing;
