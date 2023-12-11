import React from "react";
import { View, Text, StyleSheet } from 'react-native'

const Updates = () => {
    
    return (
        <View styles={styles.container}>
            <Text>Updates</Text>
        </View>
    )
}

export default Updates

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})