import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../store/actions";
import RemoveIcon from "react-native-vector-icons/MaterialIcons";

class Remove extends Component {
  constructor(props) {
    super(props);
  }
  _removeElement = () => {
    let item = this.props.item; 
    console.log(item)
    this.props.onRemoveItem(item);
  };

  render() {
    return (<RemoveIcon name="delete" size={45} onPress={this._removeElement}/>);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItem: item => dispatch(removeItem(item))
  };
};

export default connect(null,mapDispatchToProps)(Remove);
