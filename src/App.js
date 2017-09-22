import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';

// URL parameters are a methods by which we can extract parameters from our URL
// to convert /page into a parameters called page add a colon before the page value
// when address bar is changed match.params.page will display that page name
// i.e. localhost:3000/react would render PAGE: react
// at the root URL nothing is rendered, because this page value in order for the
// Route to be a match must be present
// Appending a question mark to the end of the path string will make that requirement
// optional -- without the optional page param provided, Home is rendered instead
// subdirectories can be rendered i.e. localhost:3000/react/router
// the path string can be modified to change from subdirectories (change slash to dash)

const App = (props) => (
  <Router>
    <div>
      { /* <Route path="/page" render={() => ( */ }
      { /* <Route path="/:page" render={({match}) => ( */ }
      { /* <Route path="/:page?" render={({match}) => ( */ }
      { /* <Route path="/:page?/:subpage?" render={({match}) => ( */ }

      <Route path="/:page?-:subpage?" render={({match}) => (
        <h1>
          PAGE: {match.params.page || 'Home'}<br />
          SUBPAGE: {match.params.subpage}
        </h1>
      )} />
    </div>
  </Router>
)

export default App;


// const App = () => (
//   <Router>
//     <div>
//       <Links />
//       <Route exact path="/" render={() => <h1>Home</h1>} />
//       <Route path="/about" render={() => <h1>About</h1>} />
//       <Route path="/contact" render={() => <h1>Contact</h1>} />
//     </div>
//   </Router>
// )
//
// export default App;


// NavLinks identifies the current route and gives it an an activeClassName
// Unlike link NavLink is aware of a route, it qualifies the route
// the same way the Route Component does
// To match route Component simply add any qualifies from that route to the NavLink
// activeStyle allows inline styling
// isActive prop
// isActiveFunc fires each time a navlink is rendered
// every time the route is change the isActive prop is checked and the
// isActiveFunc is fired -- the match data will be null unless the

// const isActiveFunc = (match, location) => {
//   console.log(match, location);
//   return match;
// }
//
// const Links = () => (
//   <nav>
//     <NavLink exact activeClassName="active" to="/">Home</NavLink>
//     <NavLink activeStyle={{color: "green"}} to={{pathname: '/about'}}>About</NavLink>
//     <NavLink
//       isActive={isActiveFunc}
//       activeClassName="active"
//       to="/contact">Contact</NavLink>
//   </nav>
// )


// An Object can also be interlopated into the Link Component
// the to prop becomes pathname key
// replace controls browser history -- replaces the previous URL with the
// newest URL

// const Links = () => (
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to={{pathname: '/about'}}>About</Link>
//     <Link replace to="/contact">Contact</Link>
//   </nav>
// )


// const Home = (props) => {
//   console.log(props);
//   return <h1>Home</h1>
// }


// const App = () => (
//   <Router>
//     <div>
//       <Route exact path="/" component={Home} />
//       { /* <Route strict path="/about/" component={Home} /> */ }
//       { /* <Route path="/about" component={Home} /> */ }
//       { /* <Route path="/about" render={() => <h1>About</h1>} /> */ }
//       <Route
//         path="/about"
//         children={({match}) => match && <h1>About</h1>} />
//
//     </div>
//   </Router>
// )

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
