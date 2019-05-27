import React from 'react'
import {BrowserRouter, HashRouter, Route, Switch, Link} from 'react-router-dom'

import MainPage from './components/main.jsx'
import Can from './components/can.jsx'
import styles from './components/main.css'
const MainMenu = () => {
    return (
        <div>
            <Link to="/">
                <p className={styles.sidenavTitle}>Stats In A Can</p>
            </Link>
            <hr className={styles.divider}/>
            <Link to="/can">Can</Link>
            <p className={styles.sidenavText}>Title 1 </p>
            <ul className={styles.sidenavUl}>
                <li><Link to="/">sub-title</Link></li>
            </ul>
            <a href='https://github.com/harrisonxia/' target='_blank'>Github</a>
        </div>
    )
}


export default function () {
    return (
        <HashRouter>
            <div key="content-wrapper">
                <div className={styles.sidenav}>
                    <Route path={'/'} component={MainMenu}/>
                </div>

                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/can" component={Can}/>
                    {/*<Route exact path="/reports" component={Reports}/>*/}
                </Switch>
            </div>
        </HashRouter>
    )


}