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

                        <div className={styles.tableAndBar}>
                            <div className={styles.barLeft}>

                            </div>
                        </div>

                        <div>
                            <GeoMap/>
                        </div>
                        <div className={styles.radiaChartMain}>
                            <RadialBarChart width={600} height={400} cx={200} cy={200} innerRadius={40} outerRadius={200} barSize={15} data={avg_req}>
                                <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="avg" />
                                <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={wrapperStyleRadia} />
                            </RadialBarChart>
                            <div className={styles.notes}>notes about the chart above</div>
                            <div className={styles.canCommentary}>Lorem ipsum dolor sit amet, at modo lorem rationibus eum.
                                Eos
                                at evertitur urbanitas, ex mea platonem adipiscing referrentur. Cu nec porro facilis, an

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
