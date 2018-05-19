import React from 'react';
import {createSwitchNavigator, createStackNavigator,TabBarBottom,createMaterialTopTabNavigator} from "react-navigation";
import Splash from '../Splash';
import SignIn from '../SignIn';
import Home from '../Home';
import CompleteTask from '../CompleteTask'
import Active from '../ActiveTask'


const AppStack = createMaterialTopTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'TODO'
            }
        },
        Complete: {
            screen: CompleteTask,
            navigationOptions: {
                title: 'Completed',

            }
        },
        Active: {
            screen: Active,
            navigationOptions: {
                title: 'Active'
            }
        }


    });

const AuthStack = createStackNavigator({ SignIn: SignIn});

export default createSwitchNavigator(
    {
        AuthLoading: Splash,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
