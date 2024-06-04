// import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View } from "react-native";
// import { Text, View } from "react-native";

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     <View className='flex-1 justify-center items-center bg-white'>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style='auto' />
//     </View>
//   );
// }

// 
import React from 'react';
// import { Provider } from 'react-redux';
import Navigation from './Navigation';
// import store from './store';

const App = () => {
  return (
    // <Provider store={store}>
      <Navigation />
    // </Provider>
  );
};

export default App;
