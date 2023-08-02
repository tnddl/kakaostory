import React, { useState } from "react";
import { TextInput, View,Text, TouchableOpacity,StyleSheet } from "react-native";

const Loign = ({navigation}) =>{
    const [userid, setUserId]= useState("");
    const [passwd, setPasswd] =useState("");

    return(
        <View style={styles.container}>
           <TextInput placeholder="아이디를 입력해주세요"  style={styles.input} value={userid} onChangeText={setUserId}/>
           <TextInput placeholder="비밀번호를 입력해주세요"  style={styles.input} secureTextEntry />
            <TouchableOpacity onPress={()=>navigation.navigate('Kakao',{userid})} style={styles.loginBtn}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>로그인</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Loign;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input :{
        width: '83%',
        height: 48,
        paddingLeft: 15,
        borderRadius: 5,
        marginBottom: 18,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
        },
    loginBtn:{
        width: '83%',
        height: 48,
        backgroundColor: "#ffe812",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center',
     },
     
}
   
)