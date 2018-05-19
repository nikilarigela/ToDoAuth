import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { View,FlatList} from "react-native";
import Item from "../Items";

class Active extends Component{
    
    render(){
        const ActiveTasks = this.props.todoItems.filter((eachelement) => eachelement.status===false);
        return(
            <FlatList
          data={ActiveTasks}
          renderItem={({ item }) => {
            return (
              <View>
                <Item item={item}/>
              </View>
            );
          }}
        />
        );
    }

}

const mapStateToProps = state => {
    return{
        todoItems: state.methods.todoItems
    };
};

export default connect(mapStateToProps)(Active);