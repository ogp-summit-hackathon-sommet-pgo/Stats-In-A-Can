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
                <div className={styles.title}>Overall Analysis</div>
                <div>
                    <div className={styles.mainPageContainer}>
                        <span className={styles.pageHeader}>Challenges</span>
                        <div className={styles.notes}>
                            • Seek for several public dataset. <br/>
                            • Transportation data in same format and has all the features we need like departure time of the bus in different route, <br/>
                            bus fare, bus_frequency on different dates separated in weekdays and weekends. <br/>
                            Transportation safety data (accident rate, total of collisions) <br/>
                            Economy and environmental data look into cities in the US and Canada, <br/>
                            the dataset is in different scale and different format hard to compare
                            <br/>• Collect census data in Ottawa identify workplace and residential area<br/>
                            deep into transportation data, same stop come up with different stop name and slightly different longitude and latitude. <br/>
                            Hard to aggregate
                        </div>
                        <div className={styles.title}>Findings</div>
                        <div className={styles.notes}>
                            • Overall transportation performance shows a regional pattern: East Coast has better performance that cities in Middle and West Coast.<br/>
                            • Frequency is proportional to city size.<br/>
                            Findings in case:<br/>
                            • Transit fare in Vancouver is above its economical level<br/>
                            • Transit fare in Ottawa is below its economical level<br/>
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
                            <div className={styles.notes}>Average stop frequencies in Canadian cities</div>
                            <div className={styles.canCommentary}>
                                Gatineau has shortest wait time while Calgary has longest wait time.
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
                            <div className={styles.notes}>Wheelchair accessibility across Canada</div>
                            <div className={styles.canCommentary}> Toronto provides the best accessibility.
                            </div>
                        </div>
                        <div className={styles.radiaChartMain}>
                            <SimpleLineChart/>
                            <div className={styles.notes}>Bus fare across Canada</div>
                            <div className={styles.canCommentary}>
                                Gatineau has highest bus fare while bus fare in Vancouver and Winnipeg are the most affordable.
                            </div>
                        </div>
                        <div className={styles.title}>Work in the future</div>
                        <div className={styles.notes}>
                            • combine railway dataset <br/>
                            • identify population aggregated within a city (residential and workplace)<br/>
                            • based on collected public transportation dataset and accidents dataset, predict the type of accident happen in Ottawa<br/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
