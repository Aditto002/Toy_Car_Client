import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title}-car`;
    },[title])
}
export default useTitle;