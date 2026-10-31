<<<<<<< HEAD
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const apiValue = createContext();

function AllData({children}) {
    const [text, setText] = useState([]);
    useEffect(()=>{
        axios.get("/assets/js/api.json")
        .then( (element)=>{
            setText(element.data.products)
        } )
    },[])

  return (
    <apiValue.Provider value ={text}>
        {children}
    </apiValue.Provider>

  )
}

=======
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const apiValue = createContext();

function AllData({children}) {
    const [text, setText] = useState([]);
    useEffect(()=>{
        axios.get("/assets/js/api.json")
        .then( (element)=>{
            setText(element.data.products)
        } )
    },[])

  return (
    <apiValue.Provider value ={text}>
        {children}
    </apiValue.Provider>

  )
}

>>>>>>> e4510855f4cd25cc61d182f9a1271840efc56f08
export {AllData, apiValue};