import React, { Component } from "react";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from 'react-redux';
import { changeState } from "../store/actions";
class CheckBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkBoxStatus: false
    };
  }
  

  _onCheckBoxPress = () => {
    let item = this.props.item;
    console.log(item);
    this.setState(prevState => ({
      checkBoxStatus: !prevState.checkBoxStatus
    }));
    this.props.onChangeStatus(item);

  };

  render() {
    return (
      <MaterialIcon
        name={
          this.props.item.status
            ? "checkbox-marked-circle-outline"
            : "checkbox-blank-circle-outline"
        }
        onPress={this._onCheckBoxPress}
        size={45}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeStatus: (item) => dispatch(changeState(item))
  };
};


export default connect(null,mapDispatchToProps)(CheckBox);
