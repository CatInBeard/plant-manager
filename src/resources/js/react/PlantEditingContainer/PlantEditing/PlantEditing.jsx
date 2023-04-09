import s from "./PlantEditing.module.css"

let PlantEditing = ({plant}) => {
    return <div className="card p-3">
        <img src={plant.photo} className={s.main_image} />
        <p>
            {plant.description}
        </p>
    </div>;
}

export default PlantEditing;
