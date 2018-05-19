import {StatusBar, View, AsyncStorage, ActivityIndicator} from "react-native";
import React from "react";


class Splash extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');


        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
export default Splash;