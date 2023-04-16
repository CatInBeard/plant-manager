
let LastWateringComponent = ({waterings}) => {
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

        if(date < todayStart){
            dateFormatted = date.toLocaleDateString()
        }
        else{
            dateFormatted = date.toLocaleTimeString()
        }

        return  <div className="alert alert-info">
                    Last water: {dateFormatted}
                </div>;
    }
}

export default LastWateringComponent;