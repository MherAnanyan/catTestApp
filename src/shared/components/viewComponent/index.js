import React from 'react'
import CAT from '../../../assets/images/Thinkingcat.png'
import './style.scss'

export default function ViewComponent(props) {
    return (
        <div className={props.className}>
            <img className='view-img' src={CAT} alt='cat'/>
        </div>
    )
}
