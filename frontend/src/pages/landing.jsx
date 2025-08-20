import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  
  const routeTo = useNavigate()
  
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Zoom Video Call</h2>
        </div>
        <div className="navList">
          <p onClick={()=>{
            routeTo(`/guestuser`)
          }}>Join as Guest</p>
          <p onClick={()=>{
            routeTo("/auth")
          }}>Register</p>
          <div onClick={()=>{
            routeTo("/auth")
          }} role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            ones
          </h1>
          <p>Cover a distance by Zoom Video Call</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="not found" />
        </div>
      </div>
    </div>
  );
}
