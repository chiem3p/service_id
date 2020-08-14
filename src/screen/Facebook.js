//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// create a component
class Facebook extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:0.2, backgroundColor:'red'}}>
                <Text style={styles.title}>Facebook</Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    <TouchableOpacity style={() => { }}>
                        <Text style={styles.item}>Buff Like Bài Viết </Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity style={() => { }}>
                        <Text style={styles.item}>Buff Comment Bài Viết</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity style={() => { }}>
                        <Text style={styles.item}>Buff Follow Cá Nhân</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity style={() => { }}>
                        <Text style={styles.item}>Buff Like Fanpage</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />
                    <TouchableOpacity style={() => { }}>
                        <Text style={styles.item}>Buff View Video</Text>
                    </TouchableOpacity>
                    <View style={styles.separator} />

                </ScrollView>


            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#ffbf00',
    },
    title: {
        fontSize: 39,
        top: 34,
        fontWeight: '800',
        color: 'white'
    },
    scrollView:
    {

        alignSelf: 'stretch'
    },

    item:
    {
        padding: 15,
        alignSelf: 'stretch',
        color: 'black',
        fontSize: 18
    },

    separator:
    {
        width: '100%',
        height: 2,
        backgroundColor: 'rgba(0,0,0,0.5)'
    }
});

//make this component available to the app
export default Facebook;
