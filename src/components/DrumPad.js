import React, { Component } from 'react';

class DrumPad extends Component {

    componentDidMount(){
        document.getElementsByTagName("body")[0].addEventListener("keypress", (event) => {
            if(event.which === this.props.drum.which || event.target.id === this.props.drum.sound){
                this.props.onDrumClick(this.props.drum);
            }
        });
    }

    renderAudio() {
        return (
            <audio className="clip" id={this.props.drum.key} src={`sounds/${this.props.drum.sound}`}>
                <source src={`sounds/${this.props.drum.sound}`} type="audio/wav" />
                    Your browser does not support the audio element.
            </audio>
        );
    }

    render() {
        return (
            <button 
                className="btn btn-lg btn-light drum-pad" 
                id={this.props.drum.sound} 
                style={{ margin: 5, boxShadow: "3px 3px 3px rgba(0,0,0,0.2)", width: 180 }} 
                onClick={() => this.props.onDrumClick(this.props.drum)}
            >
                {this.props.drum.key}
                {this.renderAudio()}
            </button>
        );
    }
}

export default DrumPad;