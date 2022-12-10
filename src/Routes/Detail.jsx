import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


  const Detail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const {dentist} = useContextGlobal();
  const data = dentist[params.id-1]
  return (
    <>
      <h1>Detail Dentist id </h1>
      <div className='container-card-detail'>
        <div className='card-detail'>
          <img src='/images/doctor.jpg' alt='img-doc' className='img-doc-detail'/>
          <h3>Name: {data.name}</h3>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Website: {data.website}</p>
          <button onClick={()=> navigate(-1)} className="btn-goback">Go back</button>
        </div>
      </div>
    </>
  )
}

export default Detail