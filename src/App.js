import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
// console.log(Route);
// Router Components may only have 1 child element
// The regular expression engine used by react-router considered
// and expression match as the same
// the exact qualifier doesn't care about trailing forward slash
// the strict qualifier will not render a route unless the path is met exactly
// i.e won't render /about will render /about/

// children as a method of route will always run whether there is a match or not
// using the match data pulled from children or render gets passed
// if that object exists then the route considers the current url a match
// location
const Home = (props) => {
  console.log(props);
  return <h1>Home</h1>
}

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      { /* <Route strict path="/about/" component={Home} /> */ }
      { /* <Route path="/about" component={Home} /> */ }
      { /* <Route path="/about" render={() => <h1>About</h1>} /> */ }
      <Route
        path="/about"
        children={({match}) => match && <h1>About</h1>} />

    </div>
  </Router>
)

export default App;
