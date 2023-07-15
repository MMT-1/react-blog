import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import img from '../../Assets/img/cardhome.webp'
import { getPostsDetails } from '../../features/Posts/postsSlice'
function Single({ }) {



  const postsDetail = useSelector(state => state.post.postsDetail)
  const dispatch = useDispatch()

  const { id } = useParams()

  console.log(postsDetail)
  useEffect(() => {
    if (id) {
      dispatch(getPostsDetails(id))

    }
  }, [dispatch, id])





  return (
    <div className='container mx-auto Container-post-detail mt-5' >

      <div className='w-100'>
        <div className='text-start'>
          <h1 className='post_detail-title'>{postsDetail.title} Building a custom checkbox in React Building a custom checkbox in React</h1>
        </div>
        <p>
          <span class="">
            July 19, 2022 </span>
          <span class="">10 min read</span>

        </p>

        <div className="imgdetailstyle">
          <img className='w-100' src={img} />

        </div>
        <h2>{postsDetail.description}</h2>
      </div>
    </div>

  )
}

export default Single