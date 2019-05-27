import React, {Component} from 'react'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
} from 'react-simple-maps'
import {Link} from 'react-router-dom'
import componentStyle from './component.css'
import { Button, ButtonGroup } from 'reactstrap';

class ZoomPan extends Component {
    constructor() {
        super()
        this.state = {
            center: [-106.3468, 56.1304],
            zoom: 3,
            cities: [
                {name: 'Vancouver', coordinates: [-123.1207, 49.2827]},
                {name: 'Ottawa', coordinates: [-75.6972, 45.4215]},
                {name: 'Toronto', coordinates: [-79.3832, 43.6532]},
                {name: 'Calgary', coordinates: [-114.0708, 51.0486]},
                {name: 'Montreal', coordinates: [-73.5673, 45.5017]},
                {name: 'Winnipeg', coordinates: [-97.1384, 49.8951]},
            ],
            marker: [
                // { markerOffset: -35, name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
                // { markerOffset: -35, name: "La Paz", coordinates: [-68.1193, -16.4897] },
                // { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
                {markerOffset: 36, name: 'Vancouver', coordinates: [-123.1207, 49.2827]},
                {markerOffset: -35, name: 'Ottawa', coordinates: [-75.6972, 45.4215]},
                {markerOffset: -35, name: 'Toronto', coordinates: [-79.3832, 43.6532]},
                {markerOffset: -35, name: 'Calgary', coordinates: [-114.0708, 51.0486]},
                {markerOffset: -35, name: 'Montreal', coordinates: [-73.5673, 45.5017]},
                {markerOffset: -35, name: 'Winnipeg', coordinates: [-97.1384, 49.8951]},
            ]
        }
        this.handleCitySelection = this.handleCitySelection.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleCitySelection(evt) {
        const cityId = evt.target.getAttribute('data-city')
        const city = this.state.cities[cityId]
        this.setState({
            center: city.coordinates,
            zoom: 7,
        })
    }

    handleReset() {
        this.setState({
            center: [-106.3468, 56.1304],
            zoom: 3,
        })
    }

    render() {
        const cityToName = (evt) => {
            return evt
        }
        return (
            <div className={componentStyle.mapAndButton}>
                <div>
                    <ButtonGroup vertical size="lg">
                    {
                        this.state.cities.map((city, i) => (
                            <Button
                                key={i}
                                data-city={i}
                                onClick={this.handleCitySelection}
                            >
                                {city.name}
                            </Button>
                        ))
                    }
                    <Button onClick={this.handleReset}>
                        <span className={componentStyle.resetText}>{'Reset'}</span>
                    </Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ComposableMap
                        projectionConfig={{
                            scale: 205,
                        }}
                        width={980}
                        height={551}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    >
                        <ZoomableGroup center={this.state.center} zoom={this.state.zoom}>
                            <Geographies
                                geography="https://gist.githubusercontent.com/rkini/0debc65592d85da286425948ed07df1f/raw/25f0534c7632c85c69b9fc3e4660a4edb21c55ed/canada.topojson">
                                {(geographies, projection) => geographies.map((geography, i) => geography.id !== 'ATA' && (
                                    <Geography
                                        key={i}
                                        geography={geography}
                                        projection={projection}
                                        style={{
                                            default: {
                                                fill: '#ECEFF1',
                                                stroke: '#607D8B',
                                                strokeWidth: 0.75,
                                                outline: 'none',
                                            },
                                            hover: {
                                                fill: '#607D8B',
                                                stroke: '#607D8B',
                                                strokeWidth: 0.75,
                                                outline: 'none',
                                            },
                                            pressed: {
                                                fill: '#FF5722',
                                                stroke: '#607D8B',
                                                strokeWidth: 0.75,
                                                outline: 'none',
                                            },
                                        }}
                                    />
                                ))}
                            </Geographies>
                            {/*<Markers>*/}
                            {/*    {*/}
                            {/*        this.state.cities.map((city, i) => (*/}
                            {/*            <Marker key={i} marker={city}>*/}
                            {/*                <Link to={'/'+cityToName(city.name)}>*/}
                            {/*                    <circle*/}
                            {/*                        cx={0}*/}
                            {/*                        cy={0}*/}
                            {/*                        r={6}*/}
                            {/*                        fill="#FF5722"*/}
                            {/*                        stroke="#DF3702"*/}
                            {/*                    />*/}
                            {/*                </Link>*/}
                            {/*            </Marker>*/}
                            {/*        ))*/}
                            {/*    }*/}
                            {/*</Markers>*/}

                            <Markers>
                                {this.state.marker.map((marker, i) => (
                                    <Marker
                                        key={i}
                                        marker={marker}
                                        style={{
                                            default: { stroke: "#455A64" },
                                            hover: { stroke: "#FF5722" },
                                            pressed: { stroke: "#FF5722" },
                                        }}
                                    >
                                        <g transform="translate(-12, -24)">
                                            <path
                                                fill="none"
                                                strokeWidth="2"
                                                strokeLinecap="square"
                                                strokeMiterlimit="10"
                                                strokeLinejoin="miter"
                                                d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                                            />
                                            <circle
                                                fill="none"
                                                strokeWidth="2"
                                                strokeLinecap="square"
                                                strokeMiterlimit="10"
                                                strokeLinejoin="miter"
                                                cx="12"
                                                cy="9"
                                                r="3"
                                            />
                                        </g>
                                        <text
                                            textAnchor="middle"
                                            y={marker.markerOffset}
                                            style={{
                                                fontFamily: "Roboto, sans-serif",
                                                fill: "#607D8B",
                                                stroke: "none",
                                            }}
                                        >
                                            <Link to={'/'+marker.name}>
                                                <circle
                                                    cx={0}
                                                    cy={0}
                                                    r={6}
                                                    fill="#FF5722"
                                                    stroke="#DF3702"
                                                />
                                                {marker.name}
                                            </Link>
                                        </text>
                                    </Marker>
                                ))}
                            </Markers>
                        </ZoomableGroup>
                    </ComposableMap>
                </div>
            </div>
        )
    }
}

export default ZoomPan