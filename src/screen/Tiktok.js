//import liraries
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";

// create a component
class Tiktok extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.title}>Tiktok</Text>
                </View>
                <View style={styles.center}>
                    <ScrollView style={styles.scrollView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('Like_posts')}
                        >
                            <View style={styles.separator_1}>
                                <Text style={styles.item}>Buff Like TikTok</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Buff_comments')}>
                            <View style={styles.separator_2}>
                                <Text style={styles.item}>Buff Sub Instagram</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Buff_follows')}>
                            <View style={styles.separator_3}>
                                <Text style={styles.item}>Buff View Video</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Like_pages')}>
                            <View style={styles.separator_4}>
                                <Text style={styles.item}>Buff Like Fanpage</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Buff_views')}>
                            <View style={styles.separator_5}>
                                <Text style={styles.item}>Buff View Video</Text>
                            </View>
                        </TouchableOpacity> */}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        // backgroundColor: '#ffbf00',
    },
    top: {
        // top: 20,
        justifyContent: "center",
        alignItems: 'center',
        flex: 0.2,
        backgroundColor: "black",
    },
    center: {
        // top: 20,
        flex: 0.8,
    },
    title: {

        fontSize: 60,
        // top: 34,
        fontWeight: "800",
        color: "white",
    },
    scrollView: {
        // alignSelf: "stretch",
    },

    button: {},
    item: {
        padding: 15,
        alignSelf: "stretch",
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        textAlign: 'center'

    },

    separator_1: {
        backgroundColor: "#7fe1ae",
        margin: 8,
        height: 55,
        justifyContent: 'center',
        alignItems: "center",

        // width: "100%",
        // height: 2,
        // backgroundColor: "rgba(0,0,0,0.5)",
    },
    separator_2: {
        backgroundColor: "#ff4657",
        margin: 8,
        height: 55,
        justifyContent: 'center',
        alignItems: "center",
        // width: "100%",
        // height: 2,
        // backgroundColor: "rgba(0,0,0,0.5)",
    },
    separator_3: {
        backgroundColor: "#bbc7d3",
        margin: 8,
        height: 55,
        justifyContent: 'center',
        alignItems: "center",
        // width: "100%",
        // height: 2,
        // backgroundColor: "rgba(0,0,0,0.5)",
    },
    separator_4: {
        backgroundColor: "#fec172",
        margin: 8,
        height: 55,
        justifyContent: 'center',
        alignItems: "center",
        // width: "100%",
        // height: 2,
        // backgroundColor: "rgba(0,0,0,0.5)",
    },
    separator_5: {
        backgroundColor: "#778afe",
        margin: 8,
        height: 55,
        justifyContent: 'center',
        alignItems: "center",
        // width: "100%",
        // height: 2,
        // backgroundColor: "rgba(0,0,0,0.5)",
    },
});

//make this component available to the app
export default Tiktok;
