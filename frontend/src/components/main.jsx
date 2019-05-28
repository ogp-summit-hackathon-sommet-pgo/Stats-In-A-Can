import * as React from 'react'
import styles from './main.css'
import HeadBar from './head-bar.jsx'
import randomColor from 'randomcolor'
// import {top20, comparison_games_viewers_1518, viewersCount2018} from '../data/data.js'
import {Table} from 'reactstrap'
import GeoMap from './geo-map.jsx'
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import {avg_req} from '../data/result.js'
const Main = () => {
    const name = 'Stats In A Can'
    const text = 'Public Transportation Analysis'
    const wrapperStyleRadia = {
        top: 0,
        left: 500,
        lineHeight: '24px'
    };

    return (
        <main className={styles.main}>
            <HeadBar name={name} text={text}/>

            <div className={styles.mainContainer}>
                <div className={styles.title}>Introduction</div>
                <div className={styles.notes}>
                    We aim to look into public transportation dataset in Canada and discover correlationship with economic, and environmental dimension of communities. By leveraging our collected dataset, we are able to provide deeper insight to Ottawa in order to provide much safer and more convenient accessibility to public transportation
                </div>
                <div className={styles.title}>Objective</div>
                <div>
                    <div className={styles.mainPageContainer}>
                        <span className={styles.pageHeader}></span>
                        <div className={styles.notes}>
                            generate new insight from public transportation data in 9 selected Canadian countries
                            generate transportation, economic, and environmental indicators to find the correlationship based on several factors
                            Give an overall grading to each city based on their performance in three main sectors
                            provide deep analysis to Ottawa City
                        </div>
                        <br/>


                        <span className={styles.pageDescription}>
                            <br/>
                        </span>

                        <div className={styles.tableAndBar}>
                            <div className={styles.barLeft}>

                            </div>
                        </div>

                        <div>
                            <GeoMap/>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
