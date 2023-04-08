
import m from "./Main.module.css";


let Main = ({children}) => {

    let mainClass = m.main + " container-sm mt-5" 

    return(
        <main className={mainClass}>
            {children}
        </main>
    );
} 

export default Main;