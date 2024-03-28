import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
// import randompoke from './components/RandomPoke'

// Components

import Favpoke from './components/FavPoke'

// loading ....
import ReactLoading from 'react-loading'



function App() {
  const [poke, setpoke] = useState("")
  const [loading, setloading] = useState("false")
  const [error, seterror] = useState("")

  const [number, setNumber] = useState(1)
 
 // ****set Fav
  const [fav, setFav] = useState([])

  // ***ckeck 



useEffect(()=>{

  let abortController = new AbortController();

  const loadPoke = async ()=>
  {
  try{
    setloading(true);
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`,{
    signal:abortController.signal
  });
  setpoke(response.data); // call function
  seterror("");
  
} catch(error) {
  seterror("Something went wrong",error);
  } finally{
    setloading(false);
  }
  }

  loadPoke(); // call function

  return () => abortController.abort();

},[number])



const prevPoke = () => {
  setNumber(number=>(number-1))
  }

  const nextPoke = () => {
  setNumber(number =>(number+1))
  }
  
  const randompoke = () => {
    setNumber(number => Math.floor(Math.random(number) * 1025) )
    }

  const addFav = () => {
    setFav((oldState)=>[...oldState,poke])
    
      }

  const resetFav = () => {


        setFav(()=>[])

  }

  //myHiddenFunction();
          
      console.log(poke)  // test output in log
      console.log("your Fav",fav)  // test output in log


  return (
    <div className="max-w-5xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div>
{loading ? <ReactLoading type ='spin' color='black' height='20%' width='20%'/>
:
<>
<label><b>ຊື່ໂປເກມ້ອນ:</b></label> 

          <h1>{poke?.name}</h1>
          <label><b>ລະຫັດ:</b></label> 
          <h2>{poke?.id}</h2>
          <button onClick={addFav}>Add Favourite</button><br></br>
          <button onClick={resetFav}>reset Favourite</button><br></br>
          <img src={poke?.sprites?.other?.home.front_default} alt="" width={300} /> 
          <h2><b>ຄວາມສາມາດ</b></h2>
          <ul>
          {poke?.abilities?.map((abil, idx)=>(

          <ol key={idx}>{abil?.ability?.name}</ol> ))}

          </ul>
          <button onClick={prevPoke}><b>ກ່ອນໜ້າ</b></button>
          <button onClick={nextPoke}><b>ຖັດໄປ</b></button>
          <button onClick={randompoke}><b>ສູ່ມເລືອກ</b></button>
</>
}

     
        </div>
        <div>
        <h2>Your favouite pokemon</h2>
       
        {fav.length > 0 ?  <Favpoke fav={fav} /> :  <div className='flex h-full justify-center items-center'><p>No favourite pokemon</p></div>
        
        }
          
        </div>

    </div>
    </div>
  )
}

export default App
