import * as React from "react";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
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
      element: <Layout/>,
      children: [ 
        {
          path: "/",
          element: <Home/>,
        },
    
        {
          path: "/Signup",
          element: <Signup/>,
        },

        {
          path: "/Login",
          element: <Login/>,
        },

        {
          path: "/Quiz",
          element: <Quiz/>,
        },

        {
          path: "/Result",
          element: <Result/>,
        },

      ]
    },  
  ])
  
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
