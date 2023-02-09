import "./App.css";
import "./style/landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navbar";
import Intro from "./components/intro";

function App() {
    return (
        <div>
            <div className="mybg">
                <NavigationBar />
                <Intro />
            </div>
        </div>
    );
}

export default App;
