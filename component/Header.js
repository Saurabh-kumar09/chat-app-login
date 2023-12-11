import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Fontisto, MaterialCommunityIcons } from 'react-native-vector-icons'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Okay App</Text>
                <View style={styles.iconContainer}>
                    <Fontisto name='search' size={20} color='white' style={styles.icon} />
                    <MaterialCommunityIcons name='dots-vertical' size={21} color='white' style={styles.icon} />
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202C33',
        paddingTop: 25,
        paddingBottom: 15
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    icon: {
        marginLeft: 20
    }
})