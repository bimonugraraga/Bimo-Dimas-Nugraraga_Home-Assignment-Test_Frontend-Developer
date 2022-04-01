import { useNavigate, Link } from "react-router-dom";
import '../styling/NavBar.css'
export default function NavBar(){
  return (
    <nav className="myNav">

        <Link to='/' className="navbar-brand "><h3 className="mt-3 pb-3 mb-4 font-italic border-bottom toHome">
        Tech Info
      </h3></Link>
    </nav>
  )
}