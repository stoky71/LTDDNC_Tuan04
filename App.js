import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,TextInput } from 'react-native';



export default function App() {
  const [gia,SetGia] = React.useState('141.800 đ')
  const [count, setCount] = React.useState(1)
  const onPressAdd = () => setCount(prevCount => prevCount + 1);
  const onPressRemove = () => setCount(prevCount => prevCount - 1);

  return (
    <View style={styles.container}>
      <View style={styles.view1_info}>
        <View style={{flexDirection: "row"}}>
          <Image source={require("./images/book.png")} style={styles.book}/>
            <View style={styles.viewText}>
              <Text style={styles.textTitle}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.textTitle}>Cung cấp bởi Tiki Trading</Text>
              <Text style={styles.textGiaSale}>{gia}</Text>
              <Text style={styles.textGiaCu}>{gia}</Text>
              <View style={styles.viewButton}>
                <TouchableOpacity title='+' style={styles.buttonAddRemove} onPress={onPressAdd}>
                  <Text style={{fontSize:15}}>+</Text>
                </TouchableOpacity>
                <Text style={{marginRight: 10, marginTop:5, fontSize:15}}>{count}</Text>            
                <TouchableOpacity title='-' style={styles.buttonAddRemove} onPress={onPressRemove}>
                  <Text style={{fontSize:15}}>-</Text>
                </TouchableOpacity>
                <Text style={{color:'blue',paddingTop:10, paddingLeft: 100, fontWeight: "800", fontSize:15}}>Mua sau</Text>
              </View>
            </View>  
        </View>
        <View style={{flexDirection: "row", marginTop: 8}}>
          <Text style={{fontWeight: "800"}}>Mã giảm giá đã lưu</Text>
          <Text style={{paddingLeft:10, color: 'blue', fontWeight: "800"}}>Xem tại đây</Text>
        </View>
        <View style={{flexDirection: "row", marginTop:20, justifyContent: "space-between", alignItems: 'center'}}>
          <TextInput 
          style={{paddingLeft:20,width:99, height:45,fontWeight: "800", width: "70%", borderWidth:1, fontSize: 20}}>
            <Image source={require('./images/yellow_block.png')} style={{justifyContent:'flex-start'}}></Image>
            <Text style={{}}>  Mã giảm giá</Text>
          </TextInput>
          <TouchableOpacity style={{backgroundColor: '#0A5EB7', width:99, height:45, padding:13}}>
            <Text style={{paddingLeft:7, color:'white', fontWeight:'800', fontSize: 14}}>ÁP DỤNG</Text>
          </TouchableOpacity>
        </View>  
      </View>
     
      <View style={{flex: 1.5, width: "100%", justifyContent:'space-between'}}>
        <View>
          <View style={{padding:10,backgroundColor: 'white', marginTop: 20, flexDirection:"row"}}>
            <Text style={{marginLeft: 5, fontSize:16, fontWeight:'800'}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <Text style={{marginLeft: 5, fontSize:16, fontWeight:'800', color: 'blue'}}>Nhập tại đây</Text>
          </View>
          <View style={{padding:10,backgroundColor: 'white', marginTop: 20, flexDirection:"row"}}>
            <Text style={{marginLeft: 5, fontSize:20, fontWeight:'800'}}>Tạm tính</Text>
            <Text style={{marginLeft: 210, fontSize:20, fontWeight:'800', color: 'red'}}>{141800*count} đ</Text>
          </View>
          <View style={{padding:"4%", backgroundColor: 'white', marginTop:140}}>
            <View style={{backgroundColor: 'white',flexDirection:"row"}}>
              <Text style={{marginLeft: 5, fontSize:20, fontWeight:'800'}}>Thành tiền</Text>
              <Text style={{marginLeft: 180, fontSize:20, fontWeight:'800', color: 'red'}}>{141800*count} đ</Text>
            </View>
            <TouchableOpacity style={{marginTop:15,marginLeft:20,width: 331, height:45,padding:10, backgroundColor:'red'}}>
                <Text style={{paddingLeft:55, color:'white', fontWeight:'800', fontSize: 20}}>TIẾN HÀNH ĐẶT HÀNG</Text>
              </TouchableOpacity>
          </View>
          
        </View>
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
  view1_info:{
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
    fontSize:14,
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
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    marginRight: 8,
    backgroundColor: "#C4C4C4",
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
    flex:1
  },
});
