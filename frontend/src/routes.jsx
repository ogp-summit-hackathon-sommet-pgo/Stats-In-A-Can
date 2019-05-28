import React from 'react'
import {HashRouter, Route, Switch, Link} from 'react-router-dom'

import MainPage from './components/main.jsx'
import Can from './components/can.jsx'
import Ottawa from './components/ottawa.jsx'
import Calgary from './components/calgary.jsx'
import Edmonton from './components/edmonton.jsx'
import AboutUs from './components/aboutUs.jsx'
import styles from './components/main.css'

const MainMenu = () => {
    return (
        <div>
            <Link to="/">
                <p className={styles.sidenavTitle}>Stats In A <br/>Can</p>
            </Link>
            <hr className={styles.divider}/>
            <Link to="/">Home</Link>
            <Link to="/can">Template</Link>
            <p className={styles.sidenavText}>Analysis By Cities</p>
            <ul className={styles.sidenavUl}>
                <li><Link to="/ottawa">Ottawa</Link></li>
                <li><Link to="/edmonton">Edmonton</Link></li>
                <li><Link to="/calgary">Calgary</Link></li>
            </ul>
            <Link to="/aboutus">About Us</Link>
            <a href='https://github.com/ogp-summit-hackathon-sommet-pgo/Stats-In-A-Can' target='_blank'>Github</a>
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
                    <Route exact path="/ottawa" component={Ottawa}/>
                    <Route exact path="/edmonton" component={Edmonton}/>
                    <Route exact path="/calgary" component={Calgary}/>
                    <Route exact path="/aboutus" component={AboutUs}/>
                    {/*<Route exact path="/reports" component={Reports}/>*/}
                </Switch>
            </div>
        </HashRouter>
    )


}