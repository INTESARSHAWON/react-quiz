import Nav from './Nav'
import classes from '../styles/Layout.module.css'
import { Outlet } from 'react-router-dom';

function Layout({children}) {
    return(
        <>
            <Nav />
            <main className={classes.main}>
              {/* <div className={classes.container}>
                    {children}
              </div> */}
              <Outlet></Outlet>
            </main>  
        </>
    );
}

export default Layout;