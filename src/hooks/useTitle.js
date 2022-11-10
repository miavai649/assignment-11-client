import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - My Cake House`
    },[title])
}

export default useTitle;