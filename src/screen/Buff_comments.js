//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

// create a component
class Buff_comments extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
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
        backgroundColor: 'yellow',
    },
});

//make this component available to the app
export default Buff_comments;
