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
import {edm_req} from '../data/result.js'

const Channel = () => {
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
    const data_line = [
        {
            'name': '03',
            'Saturday': 79,
            'Sunday': 171,
            'Weekday': 65,
        },
        {
            'name': '04',
            'Saturday': 321,
            'Sunday': 555,
            'Weekday': 1251,
        },
        {
            'name': '05',
            'Saturday': 1960,
            'Sunday': 1395,
            'Weekday': 6234,
        },
        {
            'name': '06',
            'Saturday': 4601,
            'Sunday': 5499,
            'Weekday': 20279,
        },
        {
            'name': '07',
            'Saturday': 8425,
            'Sunday': 13308,
            'Weekday': 29221,
        },
        {
            'name': '08',
            'Saturday': 10312,
            'Sunday': 18808,
            'Weekday': 29544,
        },
        {
            'name': '09',
            'Saturday': 11752,
            'Sunday': 25681,
            'Weekday': 19467,
        },
        {
            'name': '10',
            'Saturday': 13277,
            'Sunday': 31285,
            'Weekday': 17144,
        },
        {
            'name': '11',
            'Saturday': 14095,
            'Sunday': 34146,
            'Weekday': 16810,
        },
        {
            'name': '12',
            'Saturday': 14434,
            'Sunday': 36095,
            'Weekday': 16868,
        },
        {
            'name': '13',
            'Saturday': 14652,
            'Sunday': 36945,
            'Weekday': 17024,
        },
        {
            'name': '14',
            'Saturday': 15377,
            'Sunday': 37935,
            'Weekday': 18509,
        },
        {
            'name': '15',
            'Saturday': 15139,
            'Sunday': 37711,
            'Weekday': 26567,
        },
        {
            'name': '16',
            'Saturday': 14754,
            'Sunday': 37501,
            'Weekday': 29067,
        },
        {
            'name': '17',
            'Saturday': 14509,
            'Sunday': 36466,
            'Weekday': 28696,
        },
        {
            'name': '18',
            'Saturday': 13330,
            'Sunday': 30781,
            'Weekday': 22554,
        },
        {
            'name': '19',
            'Saturday': 11672,
            'Sunday': 24706,
            'Weekday': 15275,
        },
        {
            'name': '20',
            'Saturday': 10470,
            'Sunday': 22585,
            'Weekday': 13678,
        },
        {
            'name': '21',
            'Saturday': 9416,
            'Sunday': 20590,
            'Weekday': 13081,
        },
        {
            'name': '22',
            'Saturday': 8578,
            'Sunday': 18190,
            'Weekday': 10956,
        },
        {
            'name': '23',
            'Saturday': 7662,
            'Sunday': 13776,
            'Weekday': 8557,
        },
        {
            'name': '24',
            'Saturday': 5064,
            'Sunday': 5385,
            'Weekday': 4416,
        },
    ]
    const city = 'Edmonton'
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
                            <span className={styles.canRating}>52.0 / 100</span><br/>
                            <span className={styles.canContent}>Text</span><br/>
                            <span>Text</span><br/>
                            <span>Text</span><br/>
                            <span>Text</span><br/>
                            <span>Text</span><br/>
                        </div>
                        {/*<div className={styles.canRating}>95</div>*/}
                    </div>
                    <div className={styles.chartAndText}>
                        <RadarChart outerRadius={120} width={500} height={300} data={data}>
                            <PolarGrid/>
                            <PolarAngleAxis dataKey="subject"/>
                            <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                            <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
                            <Legend/>
                        </RadarChart>
                        <div className={styles.notes}>notes about the chart above</div>
                        <div className={styles.canCommentary}>Lorem ipsum dolor sit amet, at modo lorem rationibus eum.
                            Eos
                            at evertitur urbanitas, ex mea platonem adipiscing referrentur. Cu nec porro facilis, an
                            quodsi
                            splendide vis. Mea choro doming reprehendunt in, eos in aeterno iudicabit. Vim fuisset
                            blandit
                            interesset ex, nam cibo iisque conceptam in. His vitae evertitur ei, ut sit enim
                            consectetuer.
                            Pro no habeo feugiat voluptaria.

                            Oratio perpetua at nam, has audiam commune repudiare ad, nec eu ornatus constituto. Nemore
                            temporibus an vix, verear voluptaria disputando cu est. Est lorem neglegentur ne. Cu adhuc
                            elitr
                            eirmod vim, omnes fabellas no mei.
                        </div>
                        <LineChart width={650} height={300} data={edm_req}
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
                                        <td className={canStyles.labelPopulation}>932,546</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Area (in km<sup>2</sup>)</th>
                                        <td className={canStyles.labelPopulation}>684.19</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Safety</th>
                                        <td className={canStyles.labelRating}>71.8</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Environment</th>
                                        <td className={canStyles.labelRating}>20</td>
                                    </tr>
                                    <tr className={canStyles.labelTr}>
                                        <th className={canStyles.labelTh}>Economy</th>
                                        <td className={canStyles.labelRating}>84.7</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                    {/*<div className={styles.canRating}>95</div>*/}

                    <div className={styles.canCommentary}>Lorem ipsum dolor sit amet, at modo lorem rationibus eum. Eos
                        at evertitur urbanitas, ex mea platonem adipiscing referrentur. Cu nec porro facilis, an quodsi
                        splendide vis. Mea choro doming reprehendunt in, eos in aeterno iudicabit. Vim fuisset blandit
                        interesset ex, nam cibo iisque conceptam in. His vitae evertitur ei, ut sit enim consectetuer.
                        Pro no habeo feugiat voluptaria.

                        Oratio perpetua at nam, has audiam commune repudiare ad, nec eu ornatus constituto. Nemore
                        temporibus an vix, verear voluptaria disputando cu est. Est lorem neglegentur ne. Cu adhuc elitr
                        eirmod vim, omnes fabellas no mei.

                        Pertinax reprehendunt vel id, munere offendit per no. Ei usu veri copiosae tractatos. An cum
                        commodo feugiat albucius, tota dicta nostrum cum in. Ea solum persecuti vituperata mei. Id
                        verterem constituto eloquentiam nam, eam ex nisl possim, vim ex sonet noster voluptatum.
                        Noluisse pertinacia ne quo.

                        Ut nonumy disputando duo, nihil eruditi eu mel. Scripta adipisci mea te, quo regione
                        reprehendunt te, est te diam nullam. Cu usu dico harum denique. Modus quaestio vix at, te veri
                        discere labores sed, augue quando aperiam ad cum.

                        Eos ei alterum platonem indoctum, dicant verterem argumentum nam no, sed no imperdiet
                        quaerendum. Sit omittam erroribus at, in quo facer fuisset omittantur, et his suscipit
                        adipiscing mediocritatem. Nemore legimus moderatius te vix. Feugiat erroribus adolescens id qui,
                        latine diceret invenire eam te, odio fabulas vel at. Sit assueverit concludaturque ex, sit
                        docendi mandamus reprehendunt id, id sed nibh malis. Dicit reprimique at vim, ad cum solet
                        blandit intellegam.
                    </div>
                </div>
                <WorldMap />
            </div>

        </main>
    )
}

export default Channel
