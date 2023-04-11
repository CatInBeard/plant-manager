import s from "./Loading.module.css"

let Loading = () => {
    return <div className="text-center">
        <div className="spinner-border loading" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
    </div>
}

export default Loading;