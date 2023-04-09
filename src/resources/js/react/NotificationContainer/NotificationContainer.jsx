
let NotificationContainer = ({children, type}) => {
    if(!children){
        return ;
    }

    let alertType;

    switch(type){
        case "success":
            alertType = "alert alert-success"
            break;
        case "secondary":
            alertType = "alert alert-secondary"
        case "danger":
            alertType = "alert alert-danger"
            break;
        case "info":
            alertType = "alert alert-info"
            break;
        case "light":
            alertType = "alert alert-light"
            break;
        case "dark":
            alertType = "alert alert-dark"
            break;
        case "warning":
            alertType = "alert alert-warning"
            break;
        default:
            alertType = "alert alert-primary"
    }

    return <div className={alertType}>{children}</div>
}

export default NotificationContainer