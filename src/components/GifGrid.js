import React, {  Fragment } from 'react'
import { GifGitIteam } from './GifGitIteam'

import { useFetchGifs} from '../hooks/useFetchGif'
export const GifGrid = ({category}) => {


   const {data:images ,loading}  = useFetchGifs(category) ;
   console.log(loading);   





  return ( 
    <Fragment>
     
    <h3 className='animate__animated animate__bounce'>{category }</h3>
    {loading && <p className="animate__animated animate__flash">Cargando..</p>}
   
    <div className='card-grid'>
      
      
      {
            images.map( img => (
              <GifGitIteam 
              key={img.id}
              {...img}/>
             
            )) 
          }
  </div>
    </Fragment>
  )
}
