/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 const cameraExample = StackNavigator({
    Home : { screen: HomePage },
    SecondPage : {screen : SecondPage},
 });

AppRegistry.registerComponent('cameraExample', () => cameraExample);
