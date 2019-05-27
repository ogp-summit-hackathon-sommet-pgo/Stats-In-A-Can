import * as React from 'react'
import styles from './main.css'
import HeadBar from './head-bar.jsx'
import {
    Treemap,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    Cell,
} from 'recharts'
import randomColor from 'randomcolor'
// import {top20, comparison_games_viewers_1518, viewersCount2018} from '../data/data.js'
import {Table} from 'reactstrap'

const Main = () => {
    const name = 'Stats In A Can'
    const text = 'Public Transportation Analysis'

    return (
        <main className={styles.main}>
            <HeadBar name={name} text={text}/>

            <div className={styles.mainContainer}>
                <div className={styles.title}>Title</div>
                <div>
                    <div className={styles.mainPageContainer}>
                        <span className={styles.pageHeader}></span>
                        <div className={styles.notes}>
                            Hello World
                        </div>
                        <br/>
                        <span className={styles.pageDescription}>
                            <br/>
                        </span>
                        <div className={styles.notes}>
                            Hello World
                            <br/>
                        </div>
                        <div className={styles.tableAndBar}>
                            <div className={styles.barLeft}>

                            </div>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
