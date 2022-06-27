import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProFilee from "./profile/About";
import Navbbar from "./profile/Navbar";
import Footer from "./profile/Endpag";

function App() {
  return (
    <div className="App">
      <Navbbar />
      <ProFilee
        fullname="Samira Lena"
        bio="Capturing the story of your life, one chapter at a time."
        profession="photographer"
      >
        <h2>
          Hello everyone!<br></br> You are welcome on my page : <br></br>I am a
          french photographer based in Paris since 2012 and more recently in
          Toronto.
          <br></br> I have had an unusual career that has allowed me to travel
          around the world and develop a different artistic look. Passionate
          about art, I started, in beauty and fashion photography. I'm very
          curious and like to improve faster. I always try to find a new
          artistic conception or technique.
        </h2>
        <img src="./img/1206854.png" style={{ width: "50px" }} alt="camera" />
      </ProFilee>
      {<Footer />}
    </div>
  );
}

export default App;
