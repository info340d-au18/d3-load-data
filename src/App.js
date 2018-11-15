import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        // Load data
        d3.csv("test.csv").then((d) => {
            this.setState({ data: d });
        });
    }
    render() {
        console.log(this.state.data)
        return (
            <div>
                {this.state.data.map((d, i) => {
                    return <p key={"person-" + i}>My name is {d.name} and I like {d.interest}</p>
                })}
            </div>
        );
    }
}

export default App;
