import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image
} from 'react-native';

import {Database, Auth} from '../Configs/Firechat';
import loadingLogo from '../Assets/Images/splash.png'

class LoadingScreen extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      Auth.onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? "App" : "Auth")
      });
    }, 2500)
  }

  render(){
    return (
      <>
        <View style={styles.container}>
          <Image source={loadingLogo} style={{width:120, height: 120}}/>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})

export default LoadingScreen;
