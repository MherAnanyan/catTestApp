import React from 'react'
import { toHomeLocal } from '../../../store/actions/catData'
import { useSelector, useDispatch } from 'react-redux'
import './style.scss'

export default function Header() {
    const dispatch = useDispatch()

    const toHomePageHandler = () => {
    dispatch(toHomeLocal(null))
    } 
    
    return (
        <div className='header'>
            <p onClick={toHomePageHandler}>HOME</p>
        </div>
    )
}
