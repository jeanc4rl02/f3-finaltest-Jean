import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'


const Home = () => {
  const {dentist} = useContextGlobal()
  return (
    <main className="mainHome" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentist.map(dentist => (<Card key={dentist.id} data={dentist}/>))}
      </div>
    </main>
  )
}

export default Home