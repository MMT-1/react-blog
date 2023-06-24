import React from 'react'
import Card from './Card'
import Paginate from '../Utility/Paginate'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../features/Posts/postsSlice'




const Cards = () => {

  const posts = useSelector(state => state.post.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


  return (
    <div className='container p-0' >
      <div className='row '>
        <Card posts={posts} />
      </div>
      <div className='mx-auto'>
        <Paginate itemsPerPage={4} />
      </div>
    </div>

  )
}

export default Cards