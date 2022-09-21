import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



export default function App() {
  const [gia,SetGia] = React.useState('141.800 đ')
  const [count, setCount] = React.useState('')

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
            <Button title='+' style={styles.buttonAddRemove}/>
            <Text></Text>
            <Button title='-' style={styles.buttonAddRemove}/>
            <Text>Mua sau</Text>
          </View>
        </View>
      </View>
      <View style={styles.view2}> 
 
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
    alignItems: "flex-start"
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
    width: 15,
    height: 15
  },
  viewButton:{
    flex: 1
  },
  view2:{
    flex:1,
  },
  view3:{
    flex:1,
  },
  view4:{ 
    flex:1,
  },
});
