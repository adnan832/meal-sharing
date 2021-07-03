import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <h3>Contact us</h3>

          <p>
            Farum Midpunkt Takeaway <br />
            3520, Farum <br />
            Copenhagen,Denmark
          </p>
        </div>
        <div className="footernavbar">
          <h3>Navigate</h3>

          <Link to="/">Home</Link>
          <Link to="/meals">Meals</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/addmeal">Add meal</Link>
        </div>
        <div className="footerSmIcons">
          <h3>Follow us</h3>
          <a href="">
            <img src="https://i.ibb.co/SszC8xr/fb.png" alt="facebook" />
          </a>
          <a href="">
            <img src="https://i.ibb.co/XDSQM3W/twitter.png" alt="twitter" />
          </a>
          <a href="">
            <img src="https://i.ibb.co/Qrbmfcy/linkedin.png" alt="linkedin" />
          </a>
          <a href="">
            <img src="https://i.ibb.co/jWMP8rV/insta.png" alt="instagram" />
          </a>
          <div>
            <h5>©Developed by Adnan Aziz</h5>
          </div>
        </div>
      </div>
    </>
  );
}
