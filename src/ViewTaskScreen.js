import React, { useState } from 'react';
import axios from 'axios';
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';

const ViewTask = ({ id, name, time }) => {
  return (
    <View style={{ borderColor: "gray", borderWidth: 2, borderRadius: 10, padding: 5 }}>
      <View style={styles.container}>
        <Text style={styles.item}>
          Số thứ tự
        </Text>
        <Text style={styles.item}>
          {id}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.item}>
          Tên công việc
        </Text>
        <Text style={styles.item}>
          {name}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.item}>
          Thời gian làm
        </Text>
        <Text style={styles.item}>
          {time} giờ
        </Text>
      </View>



    </View>
  )
}

const ViewTaskScreen = () => {
  const [data, setData] = useState({});
  const [text, onChange] = useState("1");
  let url = 'http://10.0.2.2:3000/user-with-task/' + text
  axios.get(url).then(res => {
    setData(res.data)
  })

  return (
    <View //style={{ flex: 1, padding: 20 }}
    >
      <View>
        <Text>Nhập mã số người dùng</Text>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10
          }}
          onChangeText={onChange}
          value={text}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.item}>
          Mã số
        </Text>
        <Text style={styles.item}  >
          {data.id}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.item}>
          Họ
        </Text>
        <Text style={styles.item}  >
          {data.lastName}
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.item}>
          Tên
        </Text>
        <Text style={styles.item}  >
          {data.firstName}
        </Text>
      </View>

      <View style={{ ...styles.container, marginTop: 30 }}>
        <Text style={styles.item_3}>
          Các công việc
        </Text>
        <View style={styles.item_7}  >
          {
            data.tasks !== undefined ?
              <View>
                {
                  data.tasks.map((value, index) => {
                    return (
                      <View key={index} style={{ marginBottom: 10 }}>
                        <ViewTask id={value.id} name={value.name} time={value.time}></ViewTask>
                      </View>

                    )
                  })
                }
              </View> : <View></View>
          }
        </View>
      </View>


    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%', // is 50% of container width,
  },
  item_3: {
    width: '30%'
  },
  item_7: {
    width: '70%'
  }
})
export default ViewTaskScreen;