import { useState } from "react";
import { FlatList, StyleSheet, View, Text,Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { friendProfiles, myProfile ,birthProfiles} from "./data";
import Division from "./Division";
import FriendList from "./FriendList";
import FriendSection from "./FriendSection";
import Header from "./Header";
import Margin from "./Margin";
import Profile from "./Profile";
import TabBar from "./TabBar";
export default function Kakao({navigation, route}) {
  const {params} = route;
  console.log(params.userid)
  const [isOpened, setIsOpened] = useState(true);
  const [BirOpened, setBirOpened] =useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  const [isSelected, setIsSelected]=useState(false);
  const onPressArrow = () => {
    setIsOpened(!isOpened);
  }

 const onBirthPress = () =>{
  setBirOpened(!BirOpened)
 }
  const ItemSeparatorComponent = () => <Margin height={13} />
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name} 
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  )
  const ListHeaderComponent = () => (
    <View style={{ backgroundColor:"white" }}>
      <Header />
        
        <Margin height={10} />

        <Profile
          uri={myProfile.uri}
          name={params.userid} 
          introduction={myProfile.introduction}
          isMe={true}
        />

        <Margin height={15} />

        <Division />

        <Margin height={12} />

        <FriendSection 
          friendProfileLen={birthProfiles.length} 
          onPressArrow={onBirthPress}
          isOpened={BirOpened}
          title="생일친구"
        />

        <FriendSection 
          friendProfileLen={friendProfiles.length} 
          onPressArrow={onPressArrow}
          isOpened={isOpened}
          title="친구"
        />

        <Margin height={5} />
    </View>
  )
  const ListFooterComponent = () => <Margin height={10} />

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={['top', 'right', 'bottom', 'left']} // 예외없이 모두 안전영역 적용
      >
        <FlatList
          data={isOpened ? friendProfiles : []}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          keyExtractor={(_, index) => index}
          stickyHeaderIndices={[0]}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          showsVerticalScrollIndicator={false}
        />
        <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx} navigation={navigation}/>
      </SafeAreaView>
    </SafeAreaProvider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
