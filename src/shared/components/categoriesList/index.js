import React, { useState, useEffect} from 'react'
import {getCategoriesData, getCategoriesID} from '../../../store/actions/catData'
import { useSelector, useDispatch } from 'react-redux'
import './style.scss'

export default function CategoriesList(props) {
    const [activeId, setActiveId] = useState('')
    const  categories = useSelector(state => state.catData.categories)
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(getCategoriesData())
  }, [])

  const catViewIdHandler = (id) => {
      if (activeId===id) {
          return
      }
      dispatch(getCategoriesID(id, 10))
      setActiveId(id)
  }

    return (
        <div className={props.className}>
            {categories?.map((item)=>(
                <p 
                   className='category-list-item' 
                   key={item.id}
                   onClick={()=>catViewIdHandler(item.id)}>{item.name}</p>
            ))}
        </div>
    )
}
