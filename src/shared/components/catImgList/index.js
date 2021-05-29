import React, { useState, useEffect } from 'react'
import { getCategoriesID } from '../../../store/actions/catData'
import { useSelector, useDispatch } from 'react-redux'
import './style.scss'




export default function CatImgList(props) {
    const [catImgCount, setCatImgCount] = useState(10)
    const catImgId = useSelector(state => state.catData.catImgId)
    const catCategoriId = useSelector(state => state.catData.categoriID?.categories[0].id)
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getCategoriesID(catCategoriId,catImgCount))
    }, [catImgCount])

    const lazyLoadHandler = () => {
        setCatImgCount(prev=>prev+10)
    }
    return (
        <div className='cat-data-area'>
         <div className='cat-data-list'>
            {catImgId.map((item) => (
                <div key={item.id} className='cat-data-item'>
                    <img
                        className='cat-img'
                        src={item.url} />
                </div>
            ))}
        </div>
        <button onClick={lazyLoadHandler}>LOAD MORE</button>
        </div>
       
    )
}
