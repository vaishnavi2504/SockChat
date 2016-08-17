import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Message extends Component{
	render(){
        const {message} = this.props;
        var formattedTime = this.formatTime(message.timeStamp);
		return(
			<div className="message">
				<strong></strong> {formattedTime} - {message.text}
			</div>
		)
	}
    formatTime(timestamp){
        var dt= new Date();
        var hours = dt.getHours();
        var minutes = dt.getMinutes();
        var seconds = dt.getSeconds();
        
        
        return hours+": "+minutes+": "+seconds;
        
    }
}

export default Message