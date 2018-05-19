import React, { Component } from "react";
import { connect } from "react-redux";
import { FlatList, Text, StyleSheet, View } from "react-native";
import Item from "../Items";

class CompleteTask extends Component {
  render() {
    const completedTasks = this.props.todoItems.filter((eachelement) => eachelement.status);
    console.log(completedTasks);
    
    return (
      <View>
        <FlatList
          data={completedTasks}
          renderItem={({ item }) => {
            return (
              <View>
                <Item item={item}/>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoItems: state.methods.todoItems
  };
};

export default connect(mapStateToProps)(CompleteTask);
