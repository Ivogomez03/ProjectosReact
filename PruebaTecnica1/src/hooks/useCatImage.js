import { useEffect, useState } from "react";
import { CAT_ENDPOINT_URL_IMG } from "../constants/constants";

export const useCatImage = ({ fact }) => {

    const [urlImg, setUrlImg] = useState(null)

    useEffect(() => {
        //console.log(firstWord)
        if (!fact) return;

        const firstWord = fact.split(' ')[0];

        fetch(`${CAT_ENDPOINT_URL_IMG}${firstWord}`)
            .then(response => {
                const { url } = response;

                setUrlImg(url)

            })

    }, [fact])

    return { urlImg }

} //urlImg: "https..."