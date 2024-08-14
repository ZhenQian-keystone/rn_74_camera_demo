/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Button, Text, View} from 'react-native';
import CameraTestView from '../../components/CameraTestView';
import {useNavigation} from '@react-navigation/native';

function CameraDemoScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Camera Demo Screen</Text>
      <View
        style={{
          height: 300,
        }}>
        <CameraTestView />
      </View>
      {/* back button to back up */}
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default CameraDemoScreen;
