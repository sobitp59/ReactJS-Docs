import React from 'react';

const scaleName = {
    c : 'Celcius',
    f : 'Fahrenheit'
};




class LSUTempInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature : ''
        };
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.onTemperatureChange(event.target.value)
    }


    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <>
               <fieldset>
                   <legend>Enter temperature in {scaleName[scale]}</legend>
                   <input 
                   value={temperature}
                   onChange={this.handleChange}
                   />
               </fieldset>
               <hr />
            </>
        )
    }

}

export default LSUTempInput;