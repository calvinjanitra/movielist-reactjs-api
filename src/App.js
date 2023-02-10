import "./App.css";
import "./style/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getMovieList, searchMovie } from "./api";
import NavigationBar from "./components/navbar";
import Intro from "./components/intro";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        getMovieList();
    }, []);

    return (
        <div className="App">
            <NavigationBar />

            <div className="App-header">
                <Intro />

                <div className="Movie-container">
                    <div className="Movie-wrapper">
                        <div className="Movie-title">MOVIE TITLE</div>
                        <img className="Movie-image"></img>
                        <div className="Movie-date">11-2-2023</div>
                        <div className="Movie-rate">8.9</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
