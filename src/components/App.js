import * as React from "react";
    import * as ReactDOM from "react-dom/client";
    import {
      createBrowserRouter,
      RouterProvider,
    } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../styles/App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },])
  
    return (    
      <RouterProvider router={router}>

      </RouterProvider>
    );
    // <Router>
    //   <Layout>
    //     <Switch>
    //       <Route exact path="/" component={Home}></Route>
    //       <Route exact path="/signup" component={Signup}></Route>
    //       <Route exact path="/login" component={Login}></Route>
    //       <Route exact path="/quiz" component={Quiz}></Route>
    //       <Route exact path="/result" component={Result}></Route>
    //     </Switch>  
    //   </Layout>
    // </Router>
}

export default App;
