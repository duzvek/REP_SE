import { useEffect, useState } from 'react';
import { LogBox, View, Text, Button, Animated, Image, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomBars from './components/BottomTabs';
import LoginForm from './components/Login/login';
import Signin from './components/Sign_in/signIn';
import RegistrationForm from './components/Registration/registration';
import Profile from './components/UserProfile/UserProfile';
import History from './components/UserHistory/UserHistory';
import ArtistAccountCreation from './components/ArtistAccountCreation/ArtistAccountCreation';
import Settings from './components/UserSettings/UserSettings';
import Account from './components/UserAccount/UserAccount';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { Entypo, AntDesign, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { setIsPlaying, setNavDetails } from './src/redux/actions';
import axios from 'axios';
import TrackDetail from './components/TrackDetail/TrackDetail';


const Floating_player = () => {

  const navigation = useNavigation()

  const dispatch = useDispatch()
  const { floating, songAudio, isPlaying, playedDetail, coverColors, userData, api, navDetails } = useSelector(state => state.userReducer)
  const [position, setPosition] = useState()
  const [duration, setDuration] = useState()
  const [tracker, setTracker] = useState()
  const [isDone, setisDone] = useState(false)


  // const tracker = new Animated.Value(0)

  useEffect(() => {
    return () => { };
  }, []);

  useEffect(() => {

    const interval = setInterval(async () => {
      await songAudio.getStatusAsync()
        .then((status) => {
          setPosition(status.positionMillis)
          setDuration(status.durationMillis)
          let toSec = Math.floor((status.positionMillis / 1000))

          if (toSec === 30) {
            // ToastAndroid.show('yes', ToastAndroid.SHORT)
            axios.post(api + '/recordSongPlayed', { userID: userData[0], songID: playedDetail[3], playDuration: '00:' + milToSec(position) })
          }

          if (Math.floor(status.positionMillis) / 1000 === Math.floor(status.durationMillis) / 1000) {
            setisDone(true)
            dispatch(setIsPlaying(false))
            // console.warn(isDone)
          }
          else {
            setisDone(false)
          }

        })
      // await songAudio.setOnPlaybackStatusUpdate(({ isPlaying, didJustFinish }) => {
      //   if (!isPlaying && didJustFinish) {
      //     setisDone(() => !isPlaying && didJustFinish)
      //     dispatch(setIsPlaying(false))
      //     console.warn(isDone)
      //   }
      //   else {
      //     setisDone(() => false)
      //   }
      // })
      setTracker(Math.floor((position / duration) * 185))


    }, 1000)

    return () => clearInterval(interval)

  })


  const milToSec = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }



  return (
    <>
      {floating && (
        <View style={{ backgroundColor: coverColors[2], height: 107, position: 'absolute', bottom: navDetails ? 0 : 54, left: 0, right: 0, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
          <View style={{ flexDirection: 'row', elevation: 5, backgroundColor: coverColors[2], borderTopRightRadius: 20, borderTopLeftRadius: 20, height: 34, paddingHorizontal: '2%', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Entypo name="chevron-down" size={25} color={coverColors[0] == 'True' ? "black" : 'white'} style={{ marginRight: 10 }} />
              <Text style={{ fontSize: 14, marginRight: 10, fontWeight: '500', color: coverColors[0] == 'True' ? 'black' : 'white' }}>{milToSec(position) == 'NaN:NaN' ? '0:00 / 0:00' : (milToSec(position) + ' / ' + milToSec(duration))}</Text>
            </View>
            {/* <Slider /> */}


            <View style={{ position: 'absolute', left: 128, justifyContent: 'center' }}>
              <View style={{ width: 185, height: 7, backgroundColor: coverColors[0] == 'True' ? 'black' : 'white', borderRadius: 5, position: 'absolute' }}></View>
              <View style={{ height: 15, width: 15, backgroundColor: coverColors[3], position: 'absolute', borderRadius: 10, zIndex: 2, left: tracker ? (tracker - 5) : 0 }} ></View>
              <View style={{ width: tracker ? tracker : 0, height: 7, backgroundColor: coverColors[3], borderRadius: 5 }}></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <AntDesign name="heart" size={24} color="#FFFFFF" style={{ marginRight: 5 }} />
              <Feather name="maximize" size={24} color={coverColors[0] == 'True' ? "black" : 'white'} />
            </View>
            {/* <Text>{position}</Text> */}

          </View>
          <View style={{ height: 74, flexDirection: 'row', alignItems: 'center', paddingHorizontal: '2%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ height: 55, width: 55, backgroundColor: '#C7C49F', borderRadius: 8, elevation: 3, marginRight: 8 }}>
                <Image source={{ uri: playedDetail[2] }} style={{ height: '100%', width: '100%', resizeMode: 'stretch', borderRadius: 8 }} />
              </View>
              <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => { navigation.navigate('TrackDetail'); dispatch(setNavDetails(true)) }}>
                  <Text style={{ fontWeight: '700', fontSize: 16, color: coverColors[0] == 'True' ? 'black' : 'white' }}>{playedDetail[0]}</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 12, color: '#414141', marginTop: -4, color: coverColors[0] == 'True' ? 'black' : 'white' }}>{playedDetail[1]}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity>
                <Ionicons name="play-skip-back" size={26} color={coverColors[0] == 'True' ? 'black' : 'white'} style={{ marginRight: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity disabled={milToSec(position) == 'NaN:NaN' ? true : false} onPress={async () => {
                if (isDone) {
                  dispatch(setIsPlaying(true))
                  await songAudio.setStatusAsync({ shouldPlay: true, positionMillis: 0 })
                }
                else {
                  if (isPlaying) {
                    dispatch(setIsPlaying(false))
                    await songAudio.setStatusAsync({ shouldPlay: false })
                  }
                  else {
                    dispatch(setIsPlaying(true))
                    await songAudio.setStatusAsync({ shouldPlay: true })
                  }
                }




              }}>
                <Ionicons name={isPlaying ? 'pause-circle' : "play-circle"} size={45} color={coverColors[0] == 'True' ? 'black' : 'white'} style={{ marginRight: 5 }} />
              </TouchableOpacity>
              {/* <Button title='okay' onPress={() => setisDone(true)}/> */}
              <TouchableOpacity>
                <Ionicons name="play-skip-forward" size={26} color={coverColors[0] == 'True' ? 'black' : 'white'} />
              </TouchableOpacity>
            </View>

          </View>
          <Text>{ }</Text>
          {/* <Button title='gg' onPress={async () => { await songAudio.setStatusAsync({ shouldPlay: false }) }}/> */}
          {/* <Button title='gg' onPress={async () => { await songAudio.setStatusAsync({ shouldPlay: true }) }}/> */}
        </View>)}
    </>
  )
}






export default function App() {
  // const navigation = useNavigation()
  const Stack = createStackNavigator()

 




  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <Provider store={Store}>
      {/* <StatusBar hidden={true} */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginForm' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='LoginForm' component={LoginForm} />
          <Stack.Screen name='Signin' component={Signin} />
          <Stack.Screen name='RegistrationForm' component={RegistrationForm} />
          <Stack.Screen name='BottomBars' component={BottomBars} />
          <Stack.Screen name='UserProfile' component={Profile} />
          <Stack.Screen name='ArtistAccountCreation' component={ArtistAccountCreation} />
          <Stack.Screen name='History' component={History} />
          <Stack.Screen name='Settings' component={Settings} />
          <Stack.Screen name='Account' component={Account} />
          <Stack.Screen name='TrackDetail' component={TrackDetail} />
        </Stack.Navigator>
        <Floating_player />
      </NavigationContainer>

    </Provider>
  );
}
