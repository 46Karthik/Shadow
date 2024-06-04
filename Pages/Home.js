import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import { PermissionsAndroid, Alert } from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

export default function Home() {
  const [media, setMedia] = useState([]);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'External Storage Write Permission',
          message: 'App needs write permission',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage Permission Granted.');
        fetchMedia();
      } else {
        Alert.alert('Error', 'Storage Permission Not Granted');
      }
    } catch (err) {
      console.log('Permission error:', err);
    }
  };

  const fetchMedia = async () => {
    try {
      const { edges } = await CameraRoll.getPhotos({
        first: 20, // Number of media items to fetch
        assetType: 'All', // 'All', 'Photos', or 'Videos'
      });

      setMedia(edges);
    } catch (error) {
      console.log('Error fetching media:', error);
      Alert.alert('Error', 'Failed to fetch media');
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        data={media}
        keyExtractor={(item) => item.node.image.uri}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.node.image.uri }}
            style={{ width: 100, height: 100 }}
          />
        )}
      />
    </View>
  );
}
