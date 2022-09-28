import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useRoute} from '@react-navigation/native'



const FourColors = ({navigation}) =>{
  const title = "Điện thoại VSmart Joy 3\nHàng chính hãng"
  var blue = require('./images/vsmartxanh.png')
  var black = require('./images/vsmartblack.png')
  var silver = require('./images/vsmartbac.png')
  var red = require('./images/vsmartred.png')

  var image = {blue,black,red,silver}
  var [link, setLink] = useState(image.blue);
  var [title_color, setTitle_color] = useState("");
  var [color, setColor] = useState("");
  var [provide, setProvide] = useState("");
  var [provider, setProvider] = useState("");
  var [cost, setCost] = useState("");
  var [i, seti] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.viewRow}>
        <Image source={link} style={{height: 126, width:119,marginTop: 50, marginLeft: 10, alignSelf: 'flex-start' }}/>
        <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 30 }}>
                    <Text style={{ marginTop: 15, fontSize: 18 }}>{title}</Text>
                    <View style={{ marginTop: 9, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>{title_color}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{color}</Text>
                    </View>
                    <View style={{ marginTop: 9, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18 }}>{provide}</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{provider}</Text>
                    </View>
                    <Text style={{ marginTop: 9, fontSize: 18, fontWeight: 'bold' }}>{cost}</Text>
                </View>
      </View>
      <View style={{flex:1, backgroundColor:'#C4C4C4', paddingBottom:20}}>
        <Text style={{padding:5, fontSize:18,fontWeight:'450'}}>Chọn một màu bên dưới:</Text>
        <View style={{flex:1, alignItems:'center', justifyContent: 'space-around'}}>
          <TouchableOpacity onPressIn={onPress1} style={{height:70, width:75, backgroundColor:'#C5F1FB'}}
            />
          <TouchableOpacity onPressIn={onPress2} style={{height:70, width:75, backgroundColor:'red'}}
            />
          <TouchableOpacity onPressIn={onPress3} style={{height:70, width:75, backgroundColor:'black'}}
            />
          <TouchableOpacity onPressIn={onPress4} style={{height:70, width:75, backgroundColor:'#234896'}}
            />
        </View>
          <TouchableOpacity style={styles.btnMua} onPress={() => navigation.navigate('Home', { message: link, })}>
            <Text style={{color:'white', fontWeight:'800', marginLeft:150}}>XONG</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
  function onPress1() {
    return (
        setTitle_color(title_color = "Màu: "),
        setColor(color = "Bạc"),
        setProvide(provide = "Cung cấp bởi "),
        setProvider(provider = "Tiki Tradding"),
        setCost(cost = "1.790.000 đ"),
        setLink(image.silver),
        seti(i = 1)
    );
}
function onPress2() {
    return (
        setTitle_color(title_color = "Màu: "),
        setColor(color = "Đỏ"),
        setProvide(provide = "Cung cấp bởi "),
        setProvider(provider = "Tiki Tradding"),
        setCost(cost = "1.790.000 đ"),
        setLink(image.red),
        seti(i = 2)
    );
}
function onPress3() {
    return (
        setTitle_color(title_color = "Màu: "),
        setColor(color = "Đen"),
        setProvide(provide = "Cung cấp bởi "),
        setProvider(provider = "Tiki Tradding"),
        setCost(cost = "1.790.000 đ"),
        setLink(image.black),
        seti(i = 3)
    );
}
function onPress4() {
    return (
        setTitle_color(title_color = "Màu: "),
        setColor(color = "Xanh"),
        setProvide(provide = "Cung cấp bởi "),
        setProvider(provider = "Tiki Tradding"),
        setCost(cost = "1.790.000 đ"),
        setLink(image.blue),
        seti(i = 4)
    );
}
}//{backgroundColor:'#1952E294', width: 326, height:44}
export default FourColors
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // imagephone:{
  //   height:319,
  //   width:258,
  //   marginTop:20
  // },
  viewRow:{
    flexDirection: 'row', 
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom:20
  },
  view4Color:{
    flexDirection: 'row', 
    paddingTop: 35,
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  // btn4Mau:{
  //   borderColor: 'black',
  //   justifyContent: 'center',
  //   borderStyle: 'solid',
  //   borderWidth: 0.8,
  //   height:30,
  //   width: 332,
  //   borderRadius: 11,
  //   elevation: 2
  // },
  btnMua:{
    marginTop:30,
    marginLeft:40,
    justifyContent:'center',
    height: 44,
    width: 326,
    backgroundColor: '#1952E294',
    borderRadius: 11
  }
});