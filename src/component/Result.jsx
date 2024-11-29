import React from 'react'
import { useSelector } from 'react-redux'
import myReducer from '../Redex/MyReducer'

function Result() {
    const storeData = useSelector((storee) => {
        return storee
    })

    return (

        <div className=" font-extrabold text-center mt-7 decoration-rose-600">
            <h1> my text is : {storeData}  </h1>
        </div>

    )
}

export default Result