import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import img from '../../Assets/img/cardhome.webp'
import { getPostsDetails } from '../../features/Posts/postsSlice'
function Single({}) {



  const postsDetail = useSelector(state=>state.post.postsDetail)
  const dispatch = useDispatch()

  const {id} = useParams()

  console.log(postsDetail)
  useEffect(() => {
    if(id){
      dispatch(getPostsDetails(id))

    }
  }, [dispatch,id])





  return (
    <div className='container mx-auto'>
        <div className='row '>
        <div className='col-md-2'>
          <div className='singleContainer1'>
          <img className='img-fluid' src={img}/>
            <h1>{postsDetail.title}</h1>
          </div>
            
        </div>
        <div className='col-md-10 '>
          <div className='singleContainer2 text-start'>
          <h1>{postsDetail.title}</h1>

          <img className='img-fluid' src={img}/>
          <h2>{postsDetail.description}</h2>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default Single