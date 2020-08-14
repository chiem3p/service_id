//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Buff_comments extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Buff_comments</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
});

//make this component available to the app
export default Buff_comments;
