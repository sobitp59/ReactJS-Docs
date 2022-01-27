import React from "react";

//--- FUNCTIONAL COMPONENT ---//
// function StateAndLifecycle(){
//     return(
//         <>
//             <h2>This is state and lifecycle -- 04 --</h2>
//         </>
//     );
// }

//--- CLASS COMPONENT ---*//
class StateAndLifecycle extends React.Component {

    //Class constructor
    constructor(props){
        super(props);
        this.state = {
            name : 'Sobit Prasad',
            date : new Date()
        }
    }

    // Adding Lifecycle
    //-- runs after the component output has been rendered to the DOM
    componentDidMount(){ 
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date : new Date(),
        })
    }

    // Rendering to DOM
    render() {
        return (
          <>
            <h2>This is state and lifecycle -- 04 --</h2>
            <div className="wath">
                <h3>Hello {this.state.name}</h3>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
            <hr />
          </>
        );
    }
}

export default StateAndLifecycle;
