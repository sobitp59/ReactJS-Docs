import React from 'react'

class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : ' ',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value : event.target.value});
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <>
                <h1>This is Form Exercise : -- 09 --</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name 
                        <input 
                        type="text"
                        placeholder='Enter your name'
                        value={this.state.value}
                        onChange={this.handleChange}
                        />
                    </label>
                    <input type='submit' value='Submit'/>
                </form>

                <hr/>
            </>
        )
    }
}

export default  Forms;