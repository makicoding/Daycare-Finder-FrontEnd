import React from 'react';
import { Link } from "react-router-dom";
import './splash.css';
import LogoBar from '../components/logo_bar';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Splash extends React.Component {

    render() {
        return (

            <div>
                <LogoBar></LogoBar>

                {/* <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_1.png"} alt={"Sketch Screen"} />

                    <Link className="p1Button1" onClick={this.p1Button1Click}></Link>

                    <Link className="p1Button2" onClick={this.p1Button2Click}></Link>

                    <Link className="p1Button3" onClick={this.p1Button3Click}></Link>
                </div> */}

            </div>
            
        );
    }

}

export default Splash;