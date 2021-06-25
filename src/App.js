
import Footer from "./Components/Footer";
import MyResume from "./Components/MyResume"
import TopHeader from "./Components/TopHeader";
import About from "./Components/About";
import MyContact from "./Components/MyContact";
import Error from "./Components/Error";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div >
      <TopHeader />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={MyContact} />
        <Route path="/resume" component={MyResume} />
        <Route component={Error} />

      </Switch>
      <Footer />


    </div>
  );
}

export default App;
