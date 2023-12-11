import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Chat from "../component/Chat";
import Updates from "../component/Updates";

const Tab = createMaterialTopTabNavigator()

const Home = () => {
    return (
        <Tab.Navigator
            initialRouterName='Chat'
            screenOptions={{
                tabBarActiveTintColor: '#05A884',
                tabBarIndicatorStyle: {
                    backgroundColor: '#05A884',
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold'
                },
                tabBarStyle: {
                    backgroundColor: '#202C33'
                },
                tabBarInactiveTintColor: '#fff'
            }}
        >
            <Tab.Screen
                name='Chats'
                component={Chat}
            />
            <Tab.Screen
                name='Updates'
                component={Updates}
            />
        </Tab.Navigator>
    )
}

export default Home