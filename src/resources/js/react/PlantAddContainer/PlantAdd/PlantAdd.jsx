
let PlantAdd = ({
    plant,
    updateName,
    updateDescription,
    updateWatering,
    submitForm}) => {

return <div className="card my-3 p-3">
    <div className="row">
        <div className="col">
            <form onSubmit={submitForm}>
                <div className="d-flex flex-column">
                    <div className="p-2 form-group">
                        <label for="plant_name">
                            Plant name:
                        </label>
                        <input placeholder="Plant name" required onChange={updateName} className="form-control" id="plant_name" name="plant_name" type="text" value={plant.name}/>
                    </div>
                    <div className="p-2 form-group">
                        <label for="plant_description">
                            Description:
                        </label>
                        <textarea  placeholder="Plant description" required onChange={updateDescription} className="form-control" id="plant_description" name="plant_description">{plant.description}</textarea>
                    </div>
                    <div onChange={updateWatering} className="p-2 form-group">
                        <label for="week_watering_times">
                            Waterings per week:
                        </label>
                        <input className="form-control" required id="week_watering_times" name="week_watering_times" type="number" min="0" max="14" step="0.1" value={plant.care.week_watering_times}/>
                    </div>
                    <div className="p-2 form-group">
                        <input type="submit" className="btn btn-primary" value="Add"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

}

export default PlantAdd;