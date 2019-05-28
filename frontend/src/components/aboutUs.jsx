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
                                    Chuangxin (Harrison) Xia
                                </div>
                                <div className={styles.notes}>
                                    Contact: chuangxin_xia [AT] sfu.ca<br/>
                                    Data Science co-op Student at StatsCan. <br/>
                                    Master of Computer Science in Big Data at Simon Fraser University <br/>
                                    Tech used for this project: <br/>
                                    • JavaScript: ReactJS <br/>
                                    • RechartJS<br/>
                                    • Chartjs <br/>
                                    • Python<br/>
                                </div>
                            </div>
                            <div className={styles.aboutUsContainer}>
                                <div className={styles.teammateName}>
                                    Denise Chen
                                </div>
                                <div className={styles.notes}>
                                    Contact: denise_chen [AT] sfu.ca <br/>
                                    Currently studying in SFU Big Data program and do data-science co-op in StatsCan. <br/>
                                    Motivated to provide more analysis and make predictions on collected dataset. <br/>
                                    Tech used for this project: <br/>
                                    Used pandas to do data preprocessing and plotly for data visualization
                                </div>
                            </div>
                            <div className={styles.aboutUsContainer}>
                                <div className={styles.teammateName}>
                                    Yuetong Liu
                                </div>
                                <div className={styles.notes}>
                                    Contact: yuetong.liu [AT] alumni.ubc.ca <br/>
                                    Data Science Co-op Student in Statistics Canada <br/>
                                    3rd year Statistics Student in University of British Columbia <br/>
                                    Expertise: Predictive Modelling, Sampling Survey, Data Visualization, Data Warehousing <br/>
                                    Division of Labor: Analyze transportation performance within cities using R.<br/>
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
