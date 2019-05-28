import * as React from 'react'
import styles from './main.css'
import HeadBar from './head-bar.jsx'
import randomColor from 'randomcolor'
// import {top20, comparison_games_viewers_1518, viewersCount2018} from '../data/data.js'
import {Table} from 'reactstrap'
import GeoMap from './geo-map.jsx'
import {
    RadialBarChart,
    RadialBar,
    Legend,
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Line,
} from 'recharts'
import {avg_req, wheelchair_data, bus_fare} from '../data/result.js'


export class CustomizedLabel extends React.Component {
    render () {
        const {x, y, stroke, value} = this.props;

        return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>
    }
}

export class CustomizedAxisTick extends React.Component {
    render () {
        const {x, y, stroke, payload} = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
            </g>
        );
    }
}

export class SimpleLineChart extends React.Component {
    render () {
        return (
            <LineChart width={600} height={300} data={bus_fare}
                       margin={{top: 20, right: 30, left: 20, bottom: 10}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick/>}/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="Regular" stroke="#8884d8" label={<CustomizedLabel />}/>
                <Line type="monotone" dataKey="Elderly" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Children" stroke="#ffc658" />
            </LineChart>
        );
    }
}

const Main = () => {
    const name = 'Stats In A Can'
    const text = 'Public Transportation Analysis'
    const wrapperStyleRadia = {
        top: 0,
        left: 500,
        lineHeight: '24px',
    }

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

                        <div className={styles.radiaChartMain}>
                            <RadialBarChart width={500} height={400} cx={200} cy={200} innerRadius={40}
                                            outerRadius={200} barSize={15} data={avg_req}>
                                <RadialBar minAngle={15} label={{position: 'insideStart', fill: '#fff'}} background
                                           clockWise dataKey="avg"/>
                                <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle"
                                        wrapperStyle={wrapperStyleRadia}/>
                            </RadialBarChart>
                            <div className={styles.notes}>notes about the chart above</div>
                            <div className={styles.canCommentary}>Lorem ipsum dolor sit amet, at modo lorem rationibus
                                eum.
                                Eos
                                at evertitur urbanitas, ex mea platonem adipiscing referrentur. Cu nec porro facilis, an

                            </div>
                        </div>
                        <div className={styles.radiaChartMain}>
                            <BarChart width={600} height={300} data={wheelchair_data}
                                      margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend />
                                <Bar dataKey="with_wheelchair" stackId="a" fill="#66a1ff" />
                                <Bar dataKey="without_wheelchair" stackId="a" fill="#2d394c" />
                            </BarChart>
                            <div className={styles.notes}>notes about the chart above</div>
                            <div className={styles.canCommentary}>Lorem ipsum dolor sit amet, at modo lorem rationibus
                                eum.
                                Eos
                                at evertitur urbanitas, ex mea platonem adipiscing referrentur. Cu nec porro facilis, an
                            </div>
                        </div>
                        <div className={styles.radiaChartMain}>
                            <SimpleLineChart/>
                            <div className={styles.notes}>notes about the chart above</div>
                            <div className={styles.canCommentary}>Lorem ipsum dolor sit amet, at modo lorem rationibus
                                eum.
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
