let ViewLastWateringsComponent = ({waterings}) => {

    let todayStart = new Date();
    todayStart.setHours(0,0);


    return <> {waterings.map(  
        (watering) => {
            let date = new Date(watering.date)
            let dateFormatted;
            if(date < todayStart){
                dateFormatted = date.toLocaleDateString()
            }
            else{
                dateFormatted = date.toLocaleTimeString()
            }
            return <div className="alert alert-info p-2 m-2">{dateFormatted}</div>;
        }
    )}</>;
}

export default ViewLastWateringsComponent;