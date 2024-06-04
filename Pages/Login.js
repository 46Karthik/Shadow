// LoginScreen.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { styled } from 'tailwindcss-react-native';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Implement login logic here
//     if (email === 'test@example.com' && password === 'password') {
//       Alert.alert('Login Successful');
//       // Navigate to another screen if needed
//       // navigation.navigate('HomeScreen');
//     } else {
//       Alert.alert('Login Failed', 'Invalid email or password');
//     }
//   };

//   return (
//     <View className="flex-1 justify-center px-12 bg-white">
//       <Text className="text-3xl font-bold text-center mb-6">Login</Text>
//       <TextInput
//         className="h-10 border border-gray-300 rounded px-3 mb-4"
//         placeholder="Email"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         className="h-10 border border-gray-300 rounded px-3 mb-4"
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TouchableOpacity className="h-10 bg-blue-500 justify-center items-center rounded" onPress={handleLogin}>
//         <Text className="text-white font-bold">Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default LoginScreen;
// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

  const handleLogin = () => {
    // Implement login logic here
    if (email === 'Admin' && password === 'Admin@123') {
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          position: 'top',
        });
        navigation.navigate('Home');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: 'Invalid email or password',
          position: 'top',
        });
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    height: 40,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
