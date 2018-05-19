import React, { Component } from "react";
import CheckBox from "../CheckBox";
import Remove from "../Remove";
import { StyleSheet, Text, View } from "react-native";

class Item extends Component {
  render() {
    return (
      <View style={styles.flatlistItem}>
        <CheckBox item={this.props.item} />
        <Text style={styles.flatlistText}> {this.props.item.text} </Text>
        <Remove item={this.props.item} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flatlistItem: {
    flexDirection: "row",
    marginBottom: 16
  },
  flatlistText: {
    fontSize: 30,
    marginRight: "auto",
    marginLeft: 16
  }
});
export default Item;
