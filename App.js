import {useState} from "react";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {HOME, GAME} from "./constants/routes";
import { TouchableOpacity } from "react-native";
import { HomeScreen, GameScreen } from './screens';

export default function App() {
  const [showScreen, setShowScreen] = useState(HOME);
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins/Poppins-LightItalic.ttf')
  })

  if(!loaded) return <AppLoading />
  const handle = () => {
    setShowScreen(GAME)
  }
  const goBack = () => {
    setShowScreen(HOME)
  }
  
  if(showScreen == HOME) { 
    return (
      <HomeScreen changeView={handle}/>
    )
  } else {
    return (
      <GameScreen changeView={goBack}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins',
  },
  text: {
    fontFamily: 'Poppins',
  }
});
