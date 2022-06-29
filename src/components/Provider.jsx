import React from "react";
import { UserContext } from '../context'

class Provider extends React.Component{

	constructor(props){
		super(props)
	}
	render() {
    const  {store, children} = this.props;
		return (
      <UserContext.Provider value={store}>
        {children}
      </UserContext.Provider>
    )
    
	}
}

export default Provider;
