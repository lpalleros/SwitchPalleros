import { Text, View, TouchableOpacity,TextInput, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading';
import { Nav, Card } from '../../components'
const HomeScreen = (props) => { 
  const [loaded] = useFonts({
    Poppins: require('../../assets/fonts/Poppins/Poppins-LightItalic.ttf')
  })

  if(!loaded) return <AppLoading />

  return (
    <View >
      <Nav/>
      <TouchableOpacity 
        onPress={props.changeView}
      >
      <Card text="Start Game"/>
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

export default HomeScreen;