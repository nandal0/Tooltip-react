import React,{ Component }  from 'react';
import '../stylesheet/tooltip.css'

export default class tooltip extends Component{

    constructor(props){
        super(props);
        //local state for tooltip component
        this.state={
            hovered:false
        };
    }

    //when hover over the tooltip component then change state:- hovered = true
    onHover=()=>{
        this.setState({
            hovered:true
        })
    }

    //when leave the tooltip component then change state:- hovered = false
    onLeave=()=>{
        this.setState({
            hovered:false
        })
    }

    render(){
        //taking values from props and state
        const position=this.props.position;
        const { hovered }=this.state;
        return(          
                <div className="tooltip" onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
                    Hover over me! Tooltip-{position}
                    <span style={{visibility: hovered ? 'visible' : 'hidden'}} 
                    className={ `tooltiptext ${position}` } >
                        Thanks for Hovering ! I am a Tooltip
                    </span>
                </div>         
        )
    }
}