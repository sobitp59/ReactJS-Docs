import React from 'react';

// export default function HandlingEvents(){

//     function handleSubmit(event){
//         event.preventDefault();
//         console.log('SUBMITTED');
//     }

//     return(
//         <>
//             <h2>This is Handling Events Exercise --06--</h2>
//             <form onSubmit={handleSubmit}>
//                 <button type='submit'>Submit</button>
//             </form>
//             <hr />
//         </>
//     )
// }


// Handling Events In Class Component
class HandlingEvents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn : true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isToggleOn : !prevState.isToggleOn
        }))
    }

    render(){
        return(
            <>
                <h2>THIS IS HANDLING EVENTS --06--</h2>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <hr />
            </>
        )
    }
}

export default HandlingEvents;