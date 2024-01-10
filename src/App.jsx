import { useEffect, useState } from 'react'
import iconDice from "./assets/icon-dice.svg";
import './App.scss'

function App() {

  const [Advice, setAdvice] = useState('')
  const [Loading, setLoading] = useState(true)

   const  getAdvice = async () =>{
   try{
    setLoading(true)
    const res = await fetch(`https://api.adviceslip.com/advice?${Math.random()}`);
    const data = await res.json();
    setAdvice(data.slip)
   }
   catch(err)
   {
    console.log(err)
   }
   finally{
    setLoading(false)
   }
  }

  useEffect(() =>{
    getAdvice()
  }, [])



  return (
    <>

  <div className="card">
    <span className="card__small">Advice # {Advice.id}</span>
    <section className="card__content">
  
      <h2>{Loading ? <p>Loading...</p> : `"${Advice.advice}"` }</h2>
    </section>

    <button className="card__btn" onClick={getAdvice}><img src={iconDice} alt="" /> </button>
  </div>

    </>
  )
}

export default App
