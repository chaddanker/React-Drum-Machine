import React, { Component } from 'react';

import DrumPad from './DrumPad';

import drums from '../drums';

class App extends Component {

    state = { display: "Lo-Fi Drum Kit", selected: "" };

    onDrumClick = ({ name, sound, key }) => {

        if(this.state.selected !== sound) {
            this.setState({
                display: name,
                selected: sound
            });
        } 

        document.getElementById(key).play();

        //document.getElementById(sound).style.backgroundColor = this.getRandomColor();
    }

    getRandomColor() {
        return `rgb(${this.getRandomNumber255()}, ${this.getRandomNumber255()}, ${this.getRandomNumber255()})`;
    }

    getRandomNumber255(){
        return Math.floor(Math.random() * 256);
    }

    renderDrumPads() {
        return drums.map((drum, i) => {
            return (
                
                <DrumPad 
                    key={drum.sound} 
                    onDrumClick={this.onDrumClick} 
                    drum={drum} 
                    selected={this.state.selected}
                />
            );
        });
    }

    render(){
        return (
            <div className="container-xs text-center" >
                <div id="drum-machine" style={{ width: 600, margin: 'auto' }}>
                    <h1 id="display">
                        {this.state.display}
                    </h1>
                    <div>
                        {this.renderDrumPads()}
                    </div>
                </div>
            </div>
        );
    }
};

export default App;