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

const AboutUs = () => {
    const name = 'Stats In A Can'
    const text = 'Public Transportation Analysis'

    return (
        <main className={styles.main}>
            <HeadBar name={name} text={text}/>
            <div>
                <div className={styles.aboutUsPageContainer}>
                    <div className={styles.title}>ABOUT US</div>
                    <div className={styles.setWidth}>
                        <div className={styles.aboutUsBigContainer}>
                            <div className={styles.aboutUsContainer}>
                                <div className={styles.teammateName}>
                                    Hello World Name
                                </div>
                                <div className={styles.notes}>
                                    Hello World
                                </div>
                            </div>
                            <div className={styles.aboutUsContainer}>
                                <div className={styles.teammateName}>
                                    Hello World Name
                                </div>
                                <div className={styles.notes}>
                                    Hello World
                                </div>
                            </div>
                            <div className={styles.aboutUsContainer}>
                                <div className={styles.teammateName}>
                                    Hello World Name
                                </div>
                                <div className={styles.notes}>
                                    Hello World
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutUs
