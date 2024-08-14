/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Camera,
  useCameraPermission,
  useCameraDevice,
} from 'react-native-vision-camera';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';

export default function CameraTestView() {
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [isCameraType, setIsCameraType] = React.useState<any>('back');
  const device = useCameraDevice(isCameraType);
  const {hasPermission, requestPermission} = useCameraPermission();
  // Check permission status
  if (!hasPermission) {
    // Request permission if not granted
    requestPermission();
  }

  const handleFrontCam = () => {
    setIsCameraType('front');
    setIsActive(prevState => !prevState);
    setIsModalVisible(prevState => !prevState);
    console.log('handleFrontCam', isModalVisible);
  };

  const handleBackCam = async () => {
    setIsCameraType('back');
    setIsActive(prevState => !prevState);
    setIsModalVisible(prevState => !prevState);
    console.log('handleBackCam', isModalVisible);
  };

  if (device == null) {
    return <Text>You have no camera device</Text>;
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Camera View</Text>
        <Text>react-native-vision-camera</Text>
      </View>
      {device && (
        <Camera style={{flex: 1}} device={device} isActive={isActive} />
      )}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 20,
          backgroundColor: 'gray',
        }}>
        <TouchableOpacity onPress={handleFrontCam}>
          <Text style={{fontSize: 18, color: 'white'}}>Front Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBackCam}>
          <Text style={{fontSize: 18, color: 'white'}}>Back Camera</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
