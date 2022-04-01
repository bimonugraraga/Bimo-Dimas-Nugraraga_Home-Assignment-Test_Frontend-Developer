import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../styling/Detail.css'
function DetailScreen () {
  let {id} = useParams()
  console.log(id)
  let [data, setData] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3000/data/${id}`)
      .then((resp) => {
        setData(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div  className='DetailPage'>
      {
        !data? <></>:
          <div className='DetailPage2'>
            <img src={data.image} className='forImage '/>
            <div className='dataContent' key={data.id}>
              <div className="card forContent">
                  <div className="card-body">
                    <h5 className="card-title border-bottom pb-3">{data.title}<a href="#" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>
                    <p class="card-text ">{data.content}</p>
                    <a href={data.link}>SEE MORE...</a>
                  </div>
              </div>
            </div>


          </div>
            
      }
    </div>
  )
}

export default DetailScreen