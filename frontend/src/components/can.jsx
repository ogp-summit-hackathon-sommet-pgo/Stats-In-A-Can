// @flow
import * as React from 'react'
import styles from './main.css'
import canStyles from './can.css'
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
    return (
        <main className={styles.main}>

            <HeadBar name={name} text={text}/>

            <div className={styles.mainContainer}>

                <div className={styles.charts}>
                    <p>
                        some text here
                    </p>
                </div>
                <div className={styles.can}>
                    <div className={styles.canBody}>
                        <div className={styles.canLayout}></div>
                        <div className={styles.canTop}></div>
                        <div className={styles.canButt}></div>
                        <div className={styles.canText}>
                            <span className={styles.canTitle}>Ottawa</span><br/>
                            <span className={styles.canRating}>95</span><br/>
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

                            Pertinax reprehendunt vel id, munere offendit per no. Ei usu veri copiosae tractatos. An cum
                            commodo feugiat albucius, tota dicta nostrum cum in. Ea solum persecuti vituperata mei. Id
                            verterem constituto eloquentiam nam, eam ex nisl possim, vim ex sonet noster voluptatum.
                            Noluisse pertinacia ne quo.

                        </div>
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
                                    {/*<thead>*/}
                                    {/*<tr>*/}
                                    {/*    <th>#</th>*/}
                                    {/*    <th>Game</th>*/}
                                    {/*    <th>Stream Count</th>*/}
                                    {/*    <th>Genre</th>*/}
                                    {/*</tr>*/}
                                    {/*</thead>*/}
                                    {/*<tbody>*/}
                                    {/*/!*{tr}*!/*/}
                                    {/*</tbody>*/}
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
                                    <tr>
                                        <th>Safety Rating</th>
                                        <td className={canStyles.labelRating}>95</td>
                                    </tr>
                                    <tr>
                                        <th>Environment Rating</th>
                                        <td className={canStyles.labelRating}>95</td>
                                    </tr>
                                    <tr>
                                        <th>Economy Rating</th>
                                        <td className={canStyles.labelRating}>95</td>
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
                <div>{}</div>
            </div>

        </main>
    )
}

export default Channel
