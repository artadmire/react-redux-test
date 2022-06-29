import React from "react";
import { UserContext } from '../context'
import connect from './Connect'
 
class BasePost extends React.Component{

  static contextType = UserContext;

	render() {
		return (
			<div>
				{this.props.name}
			</div>
		);
	}
}
 
const mapStateToProps = (state) => { return {name: state.name}}
 
export default connect(mapStateToProps)(BasePost);