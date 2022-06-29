import React from "react";
import connect from './Connect'
 
class BaseUser extends React.Component{
	render() {
		return (
			<div>	
        {this.props.age}
			</div>
		);
	}
}
 
const mapStateToProps = (state) => { return {age: state.age}}
 
export default connect(mapStateToProps)(BaseUser);