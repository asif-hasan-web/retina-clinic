import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useService = () => {
    const [services,setService]=useState([])
    useEffect( () =>{
        fetch("/eyecare.json")
        .then((res) =>res.json())
        .then((data)=>setService(data));
    },[]

    )
    return {services,setService}
}

export default useService
