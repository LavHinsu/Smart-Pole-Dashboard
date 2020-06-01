import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { CardColumns, Card } from 'react-bootstrap';
const ChartView = () => {


    const barstate = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'congestions',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }
    const linestate = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'ppm',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 85]
            }
        ]
    }
    const uptimestate = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'uptime',
                fill: false,
                lineTension: 0.3,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [90, 91, 90, 94, 96]
            }
        ]
    }
    const cattlestate = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'cattle',
                fill: false,
                lineTension: 0.7,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [59, 61, 78, 85, 83]
            }
        ]

    }
    const lightupstate = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'poweron time',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [50, 48, 51, 46, 57]
            }
        ],

    }

    
    const cameraupstate = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'uptime',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [100, 90, 95, 100, 95]
            }
        ],

    }


    return (
        <div >
            <div class="mx-5 mt-3" >
                <CardColumns>
                    <div style={{ width: "30vw",borderRadius:"30" }} >
                        <Card className="text-center" >
                            <Card.Body>
                                <Bar
                                    data={barstate}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'total traffic congestions by month',
                                            fontSize: 10
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </Card.Body>
                        </Card>
                        <Card className="text-center" >
                            <Card.Body>
                                <Line
                                    data={linestate}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'average ppm value by month',
                                            fontSize: 10
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </Card.Body>
                        </Card>
                        <Card className="text-center" >
                            <Card.Body>
                                <Line
                                    data={uptimestate}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'average monthly uptime in %',
                                            fontSize: 10
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}cattle
                                />
                            </Card.Body>
                        </Card>
                        <Card className="text-center" >
                            <Card.Body>
                                <Line
                                    data={cattlestate}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'average monthly cattle detection',
                                            fontSize: 10
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </Card.Body>
                        </Card>
                        <Card className="text-center" >
                            <Card.Body>
                                <Line
                                    data={lightupstate}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'average light poweron time by month',
                                            fontSize: 10
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </Card.Body>
                        </Card>
                        <Card className="text-center" >
                            <Card.Body>
                                <Line
                                    data={cameraupstate}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'camera uptime in %',
                                            fontSize: 10
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    </div>
                </CardColumns>


            </div>
        </div>

    )
}
export default ChartView

