import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';



export default function App() {
  const [gia,SetGia] = React.useState('141.800 đ')
  const [count, setCount] = React.useState(0)
  const onPressAdd = () => setCount(prevCount => prevCount + 1);
  const onPressRemove = () => setCount(prevCount => prevCount - 1);

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require("./images/book.png")} style={styles.book}/>
          <View style={styles.viewText}>
            <Text style={styles.textTitle}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={styles.textTitle}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.textGiaSale}>{gia}</Text>
            <Text style={styles.textGiaCu}>{gia}</Text>
            <View style={styles.viewButton}>
              <TouchableOpacity title='+' style={styles.buttonAddRemove} onPress={onPressAdd}>
                <Text>+</Text>
              </TouchableOpacity>
              <Text>{count}</Text>            
              <TouchableOpacity title='-' style={styles.buttonAddRemove} onPress={onPressRemove}>
                <Text >-</Text>
              </TouchableOpacity>
              <Text style={{color:'blue', paddingLeft: 100, fontWeight: "800"}}>Mua sau</Text>
            </View>
          </View>
      </View>
      <View style={styles.view4}>
          <Text style={{paddingTop:10, fontWeight: "800"}}>Mã giảm giá đã lưu</Text>
          <Text style={{color: 'blue', fontWeight: "800"}}>Xem tại đây</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  book:{
    resizeMode: "stretch",
    justifyContent: 'flex-start',
    height:150,
    width: 120,
    flexDirection: "column"
  },
  view1:{
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingTop:35,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    height: 5
  },
  viewText:{
    fontSize:15,  
    paddingLeft: 15,
    paddingTop: 10,
    width: '65%',
    height: '40%'
  },
  textTitle:{
    fontWeight: "800",
    fontStyle: 'bold',
    marginBottom: 8
  },
  textGiaSale:{
    color: 'red',
    fontSize: 22,
    fontWeight: "800"
  },
  textGiaCu:{
    color: 'gray',
    textDecorationLine: 'line-through',
    
  },
  buttonAddRemove:{
    paddingLeft: 10,
    width: 25,
    height: 35,
    color: 'gray',
  },
  viewButton:{
    flexDirection: 'row',
    paddingTop:10
  },
  viewButtonMGG:{
    flex:1,
  },
  buttonMGG:{
    height:45,
    width: 245
  },
  view3:{
    flex:1,
  },
  view4:{ 
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
});
