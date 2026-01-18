import { FaTimes,FaPen,FaRegCircle } from "react-icons/fa"
export function Icon({iconName}) {
    if(iconName==="cross"){
        return <FaTimes />
    }else if(iconName==="circle"){
        return <FaRegCircle />
    }else{
        return <FaPen />
    }
}
