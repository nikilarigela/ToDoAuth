import React from 'react';
import {Button, Text, TextInput, View,AsyncStorage} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons/';


class SignIn extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };
    state={email:'',password:'',emailStatic:'abc',passStatic:'123'}


    changedEmail=(value)=>{
        this.setState((prevState)=>({
            email:value
        }))
    }

    signInAsync = async () => {

        if(this.state.password===this.state.passStatic && this.state.email===this.state.emailStatic){
            await AsyncStorage.setItem('userToken', 'abc');
            this.props.navigation.navigate('App');
        }else{
            alert("password or email are incorrect")
        }
    }


    changedPassword=(value)=>{
        this.setState((prevState)=>({
            password:value
        }))
    }

    render() {
        return (
            <View style={{justifyContent:'center',margin:32}}>

                <Icon name="assignment" size={175} color="#448AFF" style={{alignSelf:'center'}}/>
                <TextInput placeholder="Enter Email..."
                           onChangeText={this.changedEmail}
                           style={{fontcolor:"#000"}}/>
                <TextInput placeholder="Enter password..."
                           onChangeText={this.changedPassword}
                           style={{fontcolor:"#000"}}/>
                <Text>{this.state.email} & {this.state.password}</Text>
                <Button title="Sign in!" onPress={this.signInAsync} />
            </View>
        );
    }


}


export default SignIn;
