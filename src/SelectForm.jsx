import React from 'react';

export default class SelectForm extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           value : 'JavaScript'
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }
   
   handleChange(event){
       this.setState({
           value : event.target.value
       })
   }

   handleSubmit(event){
       alert('Your favorite programming language is : ' + this.state.value);
       event.preventDefault();
   }

    render(){
        return(
            <>
                <p>This is Select Tag :: --09-02-- </p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Select your favourite programming language : 
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="JAVA">JAVA</option>
                            <option value="PHP">PHP</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                            <option value="C++">C++</option>
                            <option value="C">C</option>
                            <option value="TypeScript">TypeScript</option>
                        </select>
                    </label>
                    <input type="submit" value='Submit'/>
                </form>
                <hr />

            </>
        )
    }
}