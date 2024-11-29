import React, { useState } from 'react'
import actionCretior from '../Redex/acction'
import { useDispatch } from 'react-redux'

function Input() {
    let [state, setstate] = useState("")
    let dispatch = useDispatch();


    const addData = (e) => {
        dispatch(actionCretior(state))

    }


    return (

        <div>
            <div className=' text-center  mt-5'>
                <h1> there is is input tag of redux</h1>
                <input className=' border border-gray-500 mt-5 ' onChange={(e) => { setstate(e.target.value) }} type='text' />
                <button className=' border border-gray-500 px-2 bg-slate-600' onClick={addData} >add data</button>
                <hr className=' mt-3 mb-3 bg-black'></hr>
            </div>

        </div>
    )
}

export default Input