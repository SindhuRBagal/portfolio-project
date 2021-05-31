import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import More from "./components/More";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Particles from "react-particles-js";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
    
    <>
    
    <Particles
    params={{
      particles:{
        number:{
          value:30,
          density:{
            enable:true,
            value_area:900
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width:6,
            color:"#f9ab00"
          }
        }
      }
    }}></Particles>
    <Router>
    <Navbar />
    
    <Switch>
    <Route exact path="/home" component={Header}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/projects" component={Projects}/> 
    <Route exact path="/more" component={More}/>
    <Route exact path="/contacts" component={Contacts}/>
    </Switch>
    </Router>
      </>
    
  );
}

export default App;
