import React, { lazy, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesData } from '../../store/actions/catData'
import Header from '../../shared/components/header/header'
import CategoriesList from '../../shared/components/categoriesList'
import ViewComponent from '../../shared/components/viewComponent/index'
import './style.scss'

const CatImgList = lazy(() => import('../../shared/components/catImgList/index'));

export default function Home() {

    const dispatch = useDispatch()
    const cats = useSelector(state => state.catData.catImgId)

    return (
        <div>
            <Header />
            <div className='content-area'>
                <CategoriesList className='list-area' />
                {!cats ? <ViewComponent className='view-area' />
                    : <Suspense fallback={<div>Loading...</div>}>
                        <CatImgList />
                    </Suspense>}
            </div>
        </div>
    )
}
