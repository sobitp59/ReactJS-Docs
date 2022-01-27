import React from 'react';

export default class FileForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing : true,
            numberOfGuests : 2
            }

        this.handleInputChange = this.handleInputChange.bind(this);    
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }


    render(){
        return (
            <>
            <h3>Handling Multiple Inputs</h3>
            <form>
                <label>Is Going :
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                />
                </label>

                <br/>

                <label>Number of guests : 
                <input
                    type="number"
                    name="numberOfGuests"
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange}
                />
                </label>

            </form>
            <hr/>
            </>
            

        )
    }
}

// Checkout : Formik 