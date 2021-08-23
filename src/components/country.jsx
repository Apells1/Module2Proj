import React, { Component } from 'react';

class Country extends Component {
    state = {  
        name: 'America',
        goldMedalCount: 0
    }
    handleIncrement=()=> {
        this.setState({ goldMedalCount: this.state.goldMedalCount+1  })
    }
    render() { 
        return ( <div style={{ textAlign:'center' }}>{ this.state.name } <br></br><div> Amount of gold medals: {this.state.goldMedalCount} </div><button onClick={ this.handleIncrement }>click me</button></div> );
    }
}

export default Country;