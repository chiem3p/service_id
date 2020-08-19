//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import axios from "axios";
const headers = {
    'content-type': 'application/json;charset=UTF-8',
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLm1mYi52blwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NzgyODA3MiwiZXhwIjoxNjI5MzY0MDcyLCJuYmYiOjE1OTc4MjgwNzIsImp0aSI6IkdYNXJhV29XbElsTm5XSVUiLCJzdWIiOjUwMjMxNiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.qfP62g5BDEgo8WapF9EenDFkKnvQzJl0htyHf-A578k`,
  };
// create a component
class Buff_comments extends Component {
    async componentDidMount() {
        return axios({
          method: 'post',
          url: `https://api.mfb.vn/api/advertising/create`,
          headers: headers,
          data: {
            link:
              'https://www.facebook.com/photo.php?fbid=1138767256480507&set=a.126503984373511&type=3&theater',
            object_id: '1138767256480507',
            quantity: 10,
            type: 'like',
            prices: 500,
            time_expired: '19-08-2020 17:34:00',
          },
        });
      }
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
