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
import randomColor from 'randomcolor'
import {Doughnut} from 'react-chartjs-2'
// import WorldMap from './world-map.jsx'
import canStyles from './can.css'
import {ottawa_freq, ottawa_pass_dist, ottawa_pass_rev} from '../data/result.js'

const Ottawa = () => {
    const name = 'Stats In A Can'
    const text = 'Public Transportation Analysis'

    const data = [
        {
            'subject': 'Math',
            'A': 120,
            'B': 110,
            'fullMark': 150,
        },
        {
            'subject': 'Chinese',
            'A': 98,
            'B': 130,
            'fullMark': 150,
        },
        {
            'subject': 'English',
            'A': 86,
            'B': 130,
            'fullMark': 150,
        },
        {
            'subject': 'Geography',
            'A': 99,
            'B': 100,
            'fullMark': 150,
        },
        {
            'subject': 'Physics',
            'A': 85,
            'B': 90,
            'fullMark': 150,
        },
        {
            'subject': 'History',
            'A': 65,
            'B': 85,
            'fullMark': 150,
        },
    ]
    const city = 'Ottawa'

    let label = [], data_ = [], rev_data_ = []
    let bgColor = [], hoverBgColor = []
    for (let col of ottawa_pass_dist) {
        label.push(col.type)
        data_.push(col.percent)
        bgColor.push(randomColor())
        hoverBgColor.push(randomColor())
    }

    for (let col of ottawa_pass_rev) {
        rev_data_.push(col.percent)
    }
    const dataCollection = {
        labels: label,
        datasets: [{
            data: data_,
            backgroundColor: bgColor,
            hoverBackgroundColor: hoverBgColor,
        }],
    }

    const rev_dataCollection = {
        labels: label,
        datasets: [{
            data: rev_data_,
            backgroundColor: bgColor,
            hoverBackgroundColor: hoverBgColor,
        }],
    }
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
                            <span className={styles.canRating}>64.2 / 100</span><br/>
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
                        <div className={styles.notes}>Rush hour from 7-8 and 15-17</div>
                        <div className={styles.canCommentary}> Higher bus frequency in Sunday
                        </div>
                        <LineChart width={650} height={300} data={ottawa_freq}
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
                                        <td className={canStyles.labelPopulation}>934,243</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Area (in km<sup>2</sup>)</th>
                                        <td className={canStyles.labelPopulation}>2788.789</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Safety</th>
                                        <td className={canStyles.labelRating}>85.9</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Environment</th>
                                        <td className={canStyles.labelRating}>60</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Economy</th>
                                        <td className={canStyles.labelRating}>63.3</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    {/*<div className={styles.canRating}>95</div>*/}

                    <div className={styles.canCommentary}>Above average in Environment and Economy, and leading Safety rating across the country.

                    </div>
                </div>


                <div>
                    <div className={styles.donuts}>
                        <Doughnut data={dataCollection} height={10} width={10}/>
                        <Doughnut data={rev_dataCollection} height={10} width={10}/>
                    </div>
                    <div className={styles.notes}>
                        Left - Ridership by fare category (%) <br/>
                        Right - Passenger revenue by fare category (%) <br/>
                        2016 Data
                    </div>
                </div>
                <div className={styles.radiaChartMain}>

                    <div className={styles.canCommentary}>
                    </div>
                </div>
                {/*<WorldMap/>*/}
            </div>

        </main>
    )
}

export default Ottawa
