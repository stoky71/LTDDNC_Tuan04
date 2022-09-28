import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {Rating} from 'react-native-ratings'
import {useRoute} from '@react-navigation/native'
import { useState, useEffect } from 'react';

const VsmartBlue = ({navigation}) => {

  const route = useRoute()
  var blue = require('./images/vsmartxanh.png')
  var [link, setLink] = useState(blue)

  useEffect(() => {
    if (route.params != null)
      setLink(route.params.message)
  });

  return (
    <View style={styles.container}>
      <Image source={link} style={styles.imagephone}/>
      <Text style={{marginTop:20, fontSize:16, textAlign:'center'}}
        >Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={styles.viewRow}>
        <Rating/>
        <Text style={{fontSize:18, marginTop:12, marginLeft: 10}}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={{fontWeight:'800', fontSize: 18}}>1.790.000 đ</Text>
        <Text style={{textDecorationLine:'line-through', marginLeft:20, paddingTop:3}}>1.790.000 đ</Text>
      </View>
      <View style={styles.viewRow}>
        <Text style={{fontSize:15, fontWeight:'800', color:'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <View style={{paddingLeft:10}}>
          <Image source={require("./images/question.png")}/>
        </View>
      </View>
      <View style={styles.viewRow}>
        <TouchableOpacity style={styles.btn4Mau} onPress={() => navigation.navigate('FourColors')}>
          <Text style={{marginLeft: 70, fontSize:20}}>4 MÀU - CHỌN MÀU           {">"}</Text>
          {/* <Text style={{paddingLeft:100, fontSize:20, fontWeight:'500', alignItems:'center'}}>{">"}</Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMua}>
          <Text style={{marginLeft:110,color:'white', fontSize:20, fontWeight:'800'}}
          >CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default VsmartBlue

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagephone:{
    height:319,
    width:258,
    marginTop:20
  },
  viewRow:{
    flexDirection: 'row', 
    paddingTop: 15,
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  btn4Mau:{
    borderColor: 'black',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 0.8,
    height:30,
    width: 332,
    borderRadius: 11,
    elevation: 2
  },
  btnMua:{
    marginTop:50,
    elevation:2,
    justifyContent:'center',
    borderStyle: 'solid',
    height: 44,
    width: 326,
    backgroundColor: 'red',
    borderRadius: 11
  }
});
