import React from 'react';

export default class FormEssay extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           value : 'Please write a beautiful essay on your favorite programming language.'
       };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this); 
   }

   handleChange(event){
       this.setState({
           value : event.target.value
       });
   }

   handleSubmit(event){
       alert('You have submitted a beautiful essay : ' + 
       this.state.value);
       event.preventDefault();
   }
   
    render(){
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Write an Essay : 
                        <textarea
                        value={this.state.value}
                        onChange={this.handleChange}
                         />
                    </label>
                        <input type="submit" value='Submit' />
                </form>
                <hr />
            </>
        )
    }
}