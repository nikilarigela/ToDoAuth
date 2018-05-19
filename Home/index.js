import React, { Component } from "react";
import {
  View,
  AsyncStorage,
  TextInput,
  Button,
  StyleSheet,
  Text,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { addItem } from "../store/actions";
import CheckBox from "../CheckBox";
import Remove from '../Remove';
import Item from '../Items'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todoItem: null
    };
  }

shouldComponentUpdate(newProps,newState){
  console.log("Component updated"+newProps);
  return true;
}

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  _onChangeText = value => {
    this.setState(prevState => ({
      todoItem: { status: false, text: value, key: Math.random().toString() },
      text: value
    }));
  };

  _addItem = async () => {
    if (this.state.todoItem.text === "") return;
    await this.props.onaddItem(this.state.todoItem);
  };

  render() {
    return (
      <View>
        <View style={styles.textInput}>
          <TextInput
            onChangeText={this._onChangeText}
            onSubmitEditing={this._addItem}
          />
          <Text> {JSON.stringify(this.state.todoItem)} </Text>
        </View>
        <View>
          <FlatList
            data={this.props.todoItems}
            renderItem={({ item }) => {
              return (
                <View>
                 <Item item={item}/>
                </View>
              );
            }}
          />
        </View>
        <View style={styles.signOutButton}>
          <Button title="SignOut :)" onPress={this._signOutAsync} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signOutButton: {
    bottom: 0,
    margin: 16
  },
  textInput: {
    margin: 16
  }
});

const mapStateToProps = state => {
  return {
    todoItems: state.methods.todoItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onaddItem: todoItem => dispatch(addItem(todoItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
