//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import axios from 'axios';

// create a component

class Like_posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      type: '',
      quantity: 50,
      prices: 50,
      time_expired: '',
      note: ''
    }
  }
  async componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({
      //Setting the value of the date time
      time_expired:
        date + 7 + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }
  
  getData = async () => {
    return axios
      .get("https://api.mfb.vn/api/advertising/list", {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLm1mYi52blwvYXBpXC9sb2dpbiIsImlhdCI6MTU5NzU3MzgzMCwiZXhwIjoxNjI5MTA5ODMwLCJuYmYiOjE1OTc1NzM4MzAsImp0aSI6IkUzZGFJRVBwd21xMzZ6anUiLCJzdWIiOjUwMjMxNiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.rUEEYauCtPINXBUK7Q8jsDAEZtm6PnqUXxzDvwA3xeg`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    console.log(this.state.type)
    console.log(this.state.link)
    console.log(this.state.time_expired)

    console.log(this.state.quantity)
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Like bài viết</Text>
        </View>
        <View style={styles.center}>
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

            <View style={styles.link}>
              <Text style={styles.txt}>Link hoặc ID bài viết:</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={data => this.setState({ link: data })}
              placeholder='1173682163129'
            />

            <Text style={styles.txt}>Loại cảm xúc</Text>
            <View style={styles.type}>
              <TouchableOpacity style={styles.button_type} onPress={() => this.setState({ type: 'like' })}>
                <Image
                  style={styles.image_type}
                  source={{
                    uri: 'https://mfb.vn/assets/images/fb-reaction/like.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_type} onPress={() => this.setState({ type: 'care' })}>
                <Image
                  style={styles.image_type}
                  source={{
                    uri: 'https://mfb.vn/assets/images/fb-reaction/care.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_type} onPress={() => this.setState({ type: 'love' })}>
                <Image
                  style={styles.image_type}
                  source={{
                    uri: 'https://mfb.vn/assets/images/fb-reaction/love.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_type} onPress={() => this.setState({ type: 'haha' })}>
                <Image
                  style={styles.image_type}
                  source={{
                    uri: 'https://mfb.vn/assets/images/fb-reaction/haha.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_type} onPress={() => this.setState({ type: 'wow' })}>
                <Image
                  style={styles.image_type}
                  source={{
                    uri: 'https://mfb.vn/assets/images/fb-reaction/wow.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_type} onPress={() => this.setState({ type: 'sad' })}>
                <Image
                  style={styles.image_type}
                  source={{
                    uri: 'https://mfb.vn/assets/images/fb-reaction/sad.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button_type} onPress={() => this.setState({ type: 'angry' })}>
                <Image
                  style={styles.image_type}
                  source={{
                    uri: 'https://mfb.vn/assets/images/fb-reaction/angry.png',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.txt}>Số lượng cần tăng</Text>
            <TextInput
              style={styles.input}
              onChangeText={data => this.setState({ quantity: data })}
              placeholder='50'
              keyboardType='number-pad'

            />
            <Text style={styles.txt}>Giá tiền mỗi tương tác</Text>
            <TextInput
              style={styles.input}
              value={'50'}
              keyboardType='number-pad'
            />
            <Text style={styles.txt}>Ghi chú</Text>
            <TextInput style={styles.input} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity
                // onPress={async () => await this.getData()} 
                style={styles.button}
              >
                <Text style={styles.txt_button}>Tạo tiến trình</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottom}></View>

      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7fe1ae",
  },
  button: {
    width: 200,
    borderRadius: 10,
    height: 60,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt_button: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800'
  },
  txt: {
    fontSize: 17,
  },
  scrollView: {
    // top:40,
    alignSelf: "stretch",
  },
  top: {
    top: 5,
    // backgroundColor:'red',
    // top: 19,
    flex: 0.1,
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white'
  },
  center: {
    flex: 0.9,
  },
  type: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  image_type: {
    width: 40,
    height: 40,
    marginRight: 3,
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    margin: 10,
    // marginTop: 10,
    width: 300,
    height: 50,
    backgroundColor: 'white'
  },
  bottom: {
    flex: 0,
  },
});

//make this component available to the app
export default Like_posts;
