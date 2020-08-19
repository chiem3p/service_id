//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

// create a component
class Order_history extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataElemens: {},
    };
  }
  async componentDidMount() {
    return axios
      .get("https://api.mfb.vn/api/advertising/list?type=like", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLm1mYi52blwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NzU3MzgzMCwiZXhwIjoxNjI5MTA5ODMwLCJuYmYiOjE1OTc1NzM4MzAsImp0aSI6IkUzZGFJRVBwd21xMzZ6anUiLCJzdWIiOjUwMjMxNiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.rUEEYauCtPINXBUK7Q8jsDAEZtm6PnqUXxzDvwA3xeg`,
        },
      })
      .then((res) => {
        
        this.setState({ dataElemens: res })
        console.log(this.state.dataElemens.data.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Order_history</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

//make this component available to the app
export default Order_history;
