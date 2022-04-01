import axios from 'axios'
import { useEffect, useState } from 'react'
import CardComp from '../components/Card'
import '../styling/Home.css'
function HomeScreen () {

  let [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then((resp) => {
        setData(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // console.log(JSON.stringify(data, null, 2))
  return (
    <div className='HomePage'>
      {!data? <></>:
        <div className='HomeContent'>
          <div id="carouselExampleIndicators" className="carousel slide myCar" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://graduate.binus.ac.id/files/2021/02/BGP-Artikel-Februari_02-09.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://graduate.binus.ac.id/files/2021/10/BGP-04_S1-S2-S3.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://graduate.binus.ac.id/files/2021/02/BGP-Artikel-Februari_02-09.jpg" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="row myContent">
            {

              data.map((el, i) => {
                return(
                  <CardComp data={el} key={el.id}/>
                )
              })
            }
          </div>
        </div>
      }
     
    </div>
  )
}

export default HomeScreen