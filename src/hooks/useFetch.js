import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url, ...dependency){

    const [data, setData] = useState();

    const getData = async ()=>{
        const promise = await fetch(url);
        const json = await promise.json();
        setData(json);

    }

    useEffect(
        ()=>{
            getData();
        }, dependency
    );

    return data
}