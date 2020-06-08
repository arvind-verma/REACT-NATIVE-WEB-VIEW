import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import PresentationalComponent from './PresentationalComponent'
// import List from './List.js'
// import Input from './Input.js'
// import ScrollViewExample from './ScrollView.js'
// import ImagesExample from './ImagesExample.js'
// import HttpExample from './HttpExample.js'
// import Buttons from './Buttons.js'
// import Animations from './Animations.js'
import WebViewExample from './WebViewExample.js'
const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu I love you`,
});

const App = ()=>{
	 // return (
  //     <List />
  //  )
  // return (
  // 	<Input />
  // )

  // return (
  // 	<ScrollViewExample />
  // )

  return (
    <WebViewExample/>
  )

}
export default App

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>Welcome to React Native!</Text>
//       <Text style={styles.instructions}>To get started, edit App.js</Text>
//       <Text style={styles.instructions}>{instructions}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// export default class App extends React.Component {
//    state = {
//       myState: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod Lorem ipsum dolor sit amet, consectetur adipisicing elit, used do eiusmod'
//    }
//    updateState = () => this.setState({ myState: 'The state is updated' })
//    render() {
//       return (
//      <View>
//             <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
//          </View>
//       );
//    }
// }
