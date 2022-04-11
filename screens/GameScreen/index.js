import { Text, View, TouchableOpacity,TextInput, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card } from "../../components"
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';

const GameScreen = (props) => { 
  const [loaded] = useFonts({
    Poppins: require('../../assets/fonts/Poppins/Poppins-LightItalic.ttf')
  })

  if(!loaded) return <AppLoading />
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.changeView}>
          <Card text="Go Back"/>
      </TouchableOpacity>
    </View>
  )
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

export default GameScreen;