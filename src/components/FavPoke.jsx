import  React from 'react'
import LikePoke from './LikePoke'

function FavPoke({ fav }){

    return (

        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            
            {fav?.map((data,idx)=>(
<div key={idx}>
<h3>{data.name}</h3>
<img src={data?.sprites?.other?.home.front_default} alt="" width={300} /> 

 { idx.length > 0 ?  <LikePoke />:  <LikePoke hidden />}


</div>
            )
            
            )}
        </div>

    )
  
}

export default FavPoke