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
class Facebook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Facebook</Text>
        </View>
        <View style={styles.center}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.separator_1}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Like_posts')}
              >
                <Text style={styles.item}>Buff Like Bài Viết </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.separator_2}>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Buff_comments')}>
                <Text style={styles.item}>Buff Comment Bài Viết</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.separator_3}>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Buff_follows')}>
                <Text style={styles.item}>Buff Follow Cá Nhân</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.separator_4}>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Like_pages')}>
                <Text style={styles.item}>Buff Like Fanpage</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.separator_5}>
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Buff_views')}>
                <Text style={styles.item}>Buff View Video</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: "#ff4657",
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
  },

  separator_1: {
    backgroundColor: "#7fe1ae",
    margin: 8,
    height: 55,
    justifyContent:'center',
    alignItems: "center",
    // width: "100%",
    // height: 2,
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  separator_2: {
    backgroundColor: "#91cbff",
    margin: 8,
    height: 55,
    justifyContent:'center',
    alignItems: "center",
    // width: "100%",
    // height: 2,
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  separator_3: {
    backgroundColor: "#bbc7d3",
    margin: 8,
    height: 55,
    justifyContent:'center',
    alignItems: "center",
    // width: "100%",
    // height: 2,
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  separator_4: {
    backgroundColor: "#fec172",
    margin: 8,
    height: 55,
    justifyContent:'center',
    alignItems: "center",
    // width: "100%",
    // height: 2,
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
  separator_5: {
    backgroundColor: "#778afe",
    margin: 8,
    height: 55,
    justifyContent:'center',
    alignItems: "center",
    // width: "100%",
    // height: 2,
    // backgroundColor: "rgba(0,0,0,0.5)",
  },
});

//make this component available to the app
export default Facebook;
