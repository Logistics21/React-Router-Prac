import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Route,
  Link,
  Switch,
  Prompt,
  Redirect
} from 'react-router-dom';

import './App.css';

const LinksRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>}/>
    <Route path="/about" render={() => <h1>About</h1>}/>
  </div>
)

// BrowserRouter is used in an environment that supports the HTML5 history API
// forceRefresh is meant to return a boolean value
// if forceRefresh returned false

const forceRefresh = () => {
  console.log(new Date());
  return false;
}


const BrowserRouterApp = () => (
  <Router forceRefresh={forceRefresh()}>
    <LinksRoutes />
  </Router>
)

export default StaticRouterApp;


// A common use case for intercepting a Route change is when that route change
// would cause the user to lose some data
// Prompt takes in two props message
// const Home = () => (<h1>Home</h1>)
// class Form extends React.Component {
//   state = {dirty: false}
//   setDirty = () => this.setState({dirty: true})
//
//   render() {
//     return (
//       <div>
//         <h1>Form </h1>
//         <input type="text" onInput={this.setDirty} />
//         <Prompt
//           when={this.state.dirty}
//           message="Data will be lost!"
//         />
//       </div>
//     )
//   }
// }
//
// const App = () => (
//   <Router>
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/form">Form</Link>
//       <Route exact path="/" component={Home}/>
//       <Route path="/form" component={Form}/>
//     </div>
//   </Router>
// )



// const loggedin = true;
// const Links = () => (
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/old/123">Old</Link>
//     <Link to="/new/456">New</Link>
//     <Link to="/protected">Protected</Link>
//   </nav>
// )
//
//
//
// // Redirect must be nested within a switch otherwise it will render
// // A more common use for Redirect is to override an existing route
// // now the from can be removed from the redirect
// // this method also allows you to carry over any params from the prev page

// const App = () => (
//   <Router>
//     <div>
//       <Links />
//         <Route exact path="/" render={() => (<h1>Home</h1>)} />
//         <Route
//           path="/new/:str"
//           render={({match}) => (<h1>New: {match.params.str}</h1>)}
//           />
//
//         <Route path="/old/:str" render={({match}) => (
//             <Redirect to={`/new/${match.params.str}`} />
//           )}/>
//
//         <Route path="/protected" render={() => (
//             loggedin
//             ? <h1>Welcome Logged in User</h1>
//             : <Redirect to="new/Login" />
//           )}/>
//
//       { /*}<Switch>
//         <Route exact path="/" render={() => (<h1>Home</h1>)} />
//         <Route path="/new" render={() => (<h1>New</h1>)} />
//         <Redirect from="/old" to="/new" />
//       </Switch> */ }
//     </div>
//   </Router>
// )


// const Home = () => (<h1>Home</h1>)
// const Menu = () => (
//   <div>
//     <h1>Menu</h1>
//     <Link to="/menu/food">Food</Link>
//     <Link to="/menu/drinks">Drinks</Link>
//     <Link to="/menu/sides">Sides</Link>
//     <Route path="/menu/:section"
//       render={({match}) => <h2>{match.params.section}</h2>} />
//   </div>
// )
//
//
// const App = (props) => (
//   <Router>
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/menu">Menu</Link>
//       <Route exact path="/" component={Home} />
//       <Route path="/menu" component={Menu} />
//     </div>
//   </Router>
// )


// In react router 4 Routes are simply Components
// Break Routes up and Render them individually or nest them
// const Links = () => (
//   <nav>
//     <Link to="/home">Home</Link>
//     <Link to="/about">About</Link>
//     <Header />
//     <Content />
//   </nav>
// )
//
// const Header = ({match}) => (
//   <div className="header">
//     <Route path="/:page"
//       render={({match}) => (
//         <h1>{match.params.page} header</h1>)} />
//   </div>
// )
//
// const Content = ({match}) => (
//   <div className="content">
//     <Route path="/:page"
//       render={({match}) => (
//         <p>{match.params.page} content</p>)} />
//   </div>
// )
//
// const App = (props) => (
//   <Router>
//     <div>
//       <Links />
//     </div>
//   </Router>
// )


// A Route without a path will always render
// The Switch Component wraps it's children Route components and will only
// render the first route that matches
// to create dynamic routes using a colon makes React Router match routes
// starting at the colon up to the next /, ?, or #
// const Links = () => (
//   <nav>
//     <Link to="/">Home</Link>
//     <Link to="/about">About</Link>
//     <Link to="/contact">Contact</Link>
//   </nav>
// )
//
// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Links />
//           <Switch>
//             <Route exact path="/" render={() => <h1>Home</h1>} />
//             <Route path="/about" render={() => <h1>About</h1>} />
//             <Route path="/contact" render={() => <h1>Contact</h1>} />
//             <Route path="/:id"
//               render={({match}) => <h1>Item: {match.params.id}</h1>} />
//             <Route render={() => <h1>Page Not Found</h1>} />
//           </Switch>
//         </div>
//       </Router>
//     )
//   }
// }


// When working with query strings in React Router query strings are appended
// to the path using a question mark
// in the location data the search field key will point the query string
// including the question mark
// when using it in the destructured object the search key must be specified
// to the query string and MUST NOT INCLUDE the question mark
// URLSearchParams (Chrome specific) can be used to parse the query string
// There are a number of react npm that also do this for you

// const Links = () => (
//   <nav>
//     <Link to="/?id=123">InLine</Link>
//     <Link to={{pathname: '/', search: 'id=456'}}>Object</Link>
//   </nav>
// )
//
//
// const App = (props) => (
//   <Router>
//     <div>
//       <Links />
//       <Route path="/" render={({match, location}) => (
//         <div>
//           <p>root</p>
//           <p>{JSON.stringify(match)}</p>
//           <p>{JSON.stringify(location)}</p>
//           <p>{new URLSearchParams(location.search).get('id')}</p>
//         </div>
//       )} />
//     </div>
//   </Router>
// )


// Regular expressions allow for precise validations
// Below a date-like format followed by a period followed by any number of
//characters between a-z
// const App = (props) => (
//   <Router>
//     <div>
//       <Route
//         path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)"
//         render={({match}) => (
//         <h1>
//           paramA: {match.params.a}<br />
//           paramB: {match.params.b}
//         </h1>
//       )} />
//     </div>
//   </Router>
// )


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

// const App = (props) => (
//   <Router>
//     <div>
//       { /* <Route path="/page" render={() => ( */ }
//       { /* <Route path="/:page" render={({match}) => ( */ }
//       { /* <Route path="/:page?" render={({match}) => ( */ }
//       { /* <Route path="/:page?/:subpage?" render={({match}) => ( */ }
//
//       <Route path="/:page?-:subpage?" render={({match}) => (
//         <h1>
//           PAGE: {match.params.page || 'Home'}<br />
//           SUBPAGE: {match.params.subpage}
//         </h1>
//       )} />
//     </div>
//   </Router>
// )
//
// export default App;


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
