import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentist} = useContextGlobal()
  return (
    <main className="mainHome" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentist.map(dentist => (<Card key={dentist.id} data={dentist}/>))}
      </div>
    </main>
  )
}

export default Home