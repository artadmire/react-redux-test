import React, { Component } from "react";
import { UserContext } from '../context'

const  connect =  (mapStateToProps) => (Com) => {
  class Connect extends Component {
    constructor(props) {
      super(props);
      
    }
    componentDidMount() {
      this.context.subscribe(() => {
        this.forceUpdate();
      })
    }
    static contextType = UserContext;

    render() {
      const state = mapStateToProps(this.context.getState())
      return <Com {...state }></Com>
    }
  }

  return Connect;
}

export default connect;