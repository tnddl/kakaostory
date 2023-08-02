import React from 'react'
import { View ,Text} from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon';

const End = () => {
  return (
    <View  style={{flex:1,backgroundColor: '#fff', justifyContent: 'center', alignItems:'center'}}>
    <ConfettiCannon count={300} origin={{x: -100, y: 0}} 

    />
    <Text style={{fontSize: 20}}>CONGRATURATION</Text>
    </View> 
  )
}

export default End
