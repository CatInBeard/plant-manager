
let LastWateringComponent = ({plant}) => {
    let waterings = plant.care.last_waterings

    let daysNoWater = 7/plant.care.week_watering_times

    if(waterings.length < 1 || waterings == undefined){
        return <div className="alert alert-danger">
            Plant never watered!
        </div>;
    }
    else{

        waterings.sort(
            (a,b) => {
                return a.date < b.date
            }
        );

        let date = new Date(waterings[0].date)

        let dateFormatted;

        let todayStart = new Date();
        todayStart.setHours(0,0);

        let alertType = "info";

        if(date < todayStart){
            if( (todayStart- date)/1000/3600/24 > daysNoWater ){
                alertType = "warning"   
                if( (todayStart - date)/1000/3600/24 > daysNoWater*3 ){
                    alertType = "danger"   
                }
            }
            dateFormatted = date.toLocaleDateString()
        }
        else{
            dateFormatted = date.toLocaleTimeString()
        }

        return  <div className={"alert alert-"+alertType} >
                    Last water: {dateFormatted}
                </div>;
    }
}

export default LastWateringComponent;