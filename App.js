import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import Form from './components/form';

export default function App() {
  const image = require('./assets/images/image-notas.png')

  const background = require('./assets/images/image-background.jpg')
  return (
    <View style={styles.container}>

      <ImageBackground source={background} style={styles.styleBackground}>

        <View style={styles.containerContent}>
          <Image source={image} style={styles.image} />

          <Form />
          <StatusBar style="auto" />

        </View>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },

  containerContent: {
    width: 300,
    height: 745,
    margin: 'auto'
  },

  styleBackground: {
    backgroundSize: '100%',
    backgroundPosition: 'top'
  },

  image: {
    width: 100,
    height: 100,
    marginTop: 150,
  }
});
