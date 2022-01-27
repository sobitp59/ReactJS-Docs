// Conditional Rendering
import React from 'react';

function WarningBanner(props){
    if(!props.warn){
        return null;
    }

    return(
        <div className='warning'>
            WARNING!
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showWarninig : true,
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state => ({
            showWarninig : !state.showWarninig
        }));
    }
    render(){
        return(
            <div className='page'>
                <WarningBanner warn={this.state.showWarninig}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarninig ? 'Hide' : 'Show'}
                </button>
                <hr />
            </div>
        )
    }
}

export default Page;