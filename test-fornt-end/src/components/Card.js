import '../styling/Home.css'
import { useNavigate } from 'react-router-dom'
function CardComp ({data}) {
  const navigate = useNavigate()
  const toDetail = (id) => {
    navigate(`/${id}`)
  }
  return(
    <div className="col-md-4" key={data.id}>
      <div className="card  forCard">
        <img className="card-img-top" src={data.image} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title border-bottom pb-3">{data.title}<a href="#" className="float-right d-inline-flex share"><i className="fas fa-share-alt text-primary"></i></a></h5>

          <button className="btn btn-sm btn-info float-right " onClick={() => toDetail(data.id)}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default CardComp