import React from 'react';
import {  Card,  Jumbotron, CardColumns, ProgressBar } from "react-bootstrap";

const Dashboard = () => {

    return (
        <div>
            <Jumbotron >
                <h2 style={{color:"green",textAlign:"center"}}>All Systems Online</h2>
            </Jumbotron>
            <div class="mx-5 my-4">
                <CardColumns>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Poles Online</Card.Title>
                            <Card.Text>
                                {'9'} Poles Online Out of {'10'}
                            </Card.Text>
                            <Card.Text>
                                <ProgressBar variant="success" now={90} />
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Street Lights Online</Card.Title>
                            <Card.Text>
                                {'2'} Lights Drawing Power Out Of {'20'}
                            </Card.Text>
                            <Card.Text>
                                <ProgressBar variant="warning" now={10} />
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 1 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Cameras Currently Live</Card.Title>
                            <Card.Text>
                                {'9'} Cameras Live Out of {'10'}
                            </Card.Text>
                            <Card.Text>
                                <ProgressBar variant="success" now={90} />
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Live</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Accident Detected Today</Card.Title>
                            <Card.Text>
                                2 Accidents Detected
                            </Card.Text>
                            <Card.Text>
                                <ProgressBar variant="warning" now={100} />
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Updated 5 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Traffic</Card.Title>
                            <Card.Text>
                                Congestion On Poles At {'{location API}'}
                            </Card.Text>
                            <Card.Text>
                                <ProgressBar variant="danger" now={100} />
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Updated 2 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>PPM</Card.Title>
                            <Card.Text>
                                PPM at mild to dangerous levels
                            </Card.Text>
                            <Card.Text>
                                <ProgressBar variant="warning" now={50} />
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Updated 50 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
                
            </div>
        </div>
    )
}
export default Dashboard