// @flow
import * as React from 'react'
import styles from './main.css'
import HeadBar from './head-bar.jsx'
import {Table} from 'reactstrap'
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    AreaChart,
    Area, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadarChart,
    Bar, BarChart,
} from 'recharts'
import WorldMap from './world-map.jsx'
import canStyles from './can.css'
import {calgary_req} from '../data/result.js'
const Channel = () => {
    const name = 'Stats In A Can'
    const text = 'Public Transportation Analysis'

    // const data = [
    //     {
    //         'subject': 'Math',
    //         'A': 120,
    //         'B': 110,
    //         'fullMark': 150,
    //     },
    //     {
    //         'subject': 'Chinese',
    //         'A': 98,
    //         'B': 130,
    //         'fullMark': 150,
    //     },
    //     {
    //         'subject': 'English',
    //         'A': 86,
    //         'B': 130,
    //         'fullMark': 150,
    //     },
    //     {
    //         'subject': 'Geography',
    //         'A': 99,
    //         'B': 100,
    //         'fullMark': 150,
    //     },
    //     {
    //         'subject': 'Physics',
    //         'A': 85,
    //         'B': 90,
    //         'fullMark': 150,
    //     },
    //     {
    //         'subject': 'History',
    //         'A': 65,
    //         'B': 85,
    //         'fullMark': 150,
    //     },
    // ]

    const city = 'Calgary'

    return (
        <main className={styles.main}>

            <HeadBar name={name} text={text}/>

            <div className={styles.mainContainer}>
                <div className={styles.can}>
                    <div className={styles.canBody}>
                        <div className={styles.canLayout}></div>
                        <div className={styles.canTop}></div>
                        <div className={styles.canButt}></div>
                        <div className={styles.canText}>
                            <span className={styles.canTitle}>{city}</span><br/>
                            <span className={styles.canRating}>36.9 / 100</span><br/>
                            {/*<span className={styles.canContent}>Text</span><br/>*/}
                        </div>
                        {/*<div className={styles.canRating}>95</div>*/}
                    </div>
                    <div className={styles.chartAndText}>
                        {/*<RadarChart outerRadius={120} width={500} height={300} data={data}>*/}
                        {/*    <PolarGrid/>*/}
                        {/*    <PolarAngleAxis dataKey="subject"/>*/}
                        {/*    <PolarRadiusAxis angle={30} domain={[0, 150]}/>*/}
                        {/*    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>*/}
                        {/*    <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>*/}
                        {/*    <Legend/>*/}
                        {/*</RadarChart>*/}
                        <div className={styles.notes}>Low bus frequency. Low bus fare considering it's economy size and development. </div>
                        <div className={styles.canCommentary}>
                            Rush hours 7-8 and 15 - 16. Low traffic on the weekends.
                        </div>
                        <LineChart width={650} height={300} data={calgary_req}
                                   margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line type="monotone" dataKey="Saturday" stroke="#FFC0CB"/>
                            <Line type="monotone" dataKey="Sunday" stroke="#8884d8"/>
                            <Line type="monotone" dataKey="Weekday" stroke="#82ca9d"/>
                        </LineChart>
                    </div>
                </div>
                <div className={styles.can}>
                    <div className={styles.canBody}>
                        <div className={styles.canLayout}></div>
                        <div className={styles.canTop}></div>
                        <div className={styles.canButt}></div>
                        <div className={styles.canLabel}>
                            <div className={styles.tableRight}>
                                <Table borderless responsive className={styles.gameName}>
                                    <thead className={canStyles.labelHeader}>
                                    <span>C</span>
                                    <span>i</span>
                                    <span>t</span>
                                    <span>y</span>
                                    <span> </span>
                                    <span>F</span>
                                    <span>a</span>
                                    <span>c</span>
                                    <span>t</span>
                                    <span>s</span>
                                    </thead>
                                    <tbody>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Population</th>
                                        <td className={canStyles.labelPopulation}>11,239,220</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Area (in km<sup>2</sup>)</th>
                                        <td className={canStyles.labelPopulation}>825.05</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Safety</th>
                                        <td className={canStyles.labelRating}>71.9</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Environment</th>
                                        <td className={canStyles.labelRating}>20</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Economy</th>
                                        <td className={canStyles.labelRating}>93.7</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    {/*<div className={styles.canRating}>95</div>*/}

                    <div className={styles.canCommentary}> Great economic development while lacking in environment. High in green house gas emission.
                    </div>
                </div>
                <WorldMap />
            </div>

        </main>
    )
}

export default Channel
