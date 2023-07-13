import { MDBIcon} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


export const Footer = () => {
    return (

<div className="bg-dark p-5 mt-0 footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span>About GIT</span>GIT, a prestigious higher institute of education, stands at the forefront of academic excellence, offering a wide array of cutting-edge programs to nurture the next generation of scholars and professionals.</p>
    <div className="icons">
      <a href="https://www.facebook.com/"><MDBIcon fab icon="facebook" /></a>
      <a href="https://twitter.com/"><MDBIcon fab icon="twitter" /></a>
      <a href="https://www.linkedin.com/"><MDBIcon fab icon="linkedin" /></a>
      <a href="https://support.google.com/answer/2451065?hl=en"><MDBIcon fab icon="google-plus" /></a>
      <a href="https://www.instagram.com/"><MDBIcon fab icon="instagram" /></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span>11 Randkant Cresent</span>Centurion, South Africa</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+27) 71 954 3735</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#">info@GIT.ac.za</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2>Gauteng Institute of Technology</h2>
    <p className="menu">
      <a href="#">Contatct</a> |
      <a href="#">Careers</a> |
      <a href="#"> tc&cs</a> |
      <a href="#"> Gallery</a> |
      <a href="#"> Contact</a> 
    </p>
    <p className="name"> Gauteng Institute Technology &copy; 2023</p>
  </div>
</div>

)
    }
    