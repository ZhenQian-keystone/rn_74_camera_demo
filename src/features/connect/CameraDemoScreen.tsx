/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import CameraTestView from '../../components/CameraTestView';

function CameraDemoScreen() {
  return (
    <View>
      <Text>Camera Demo Screen</Text>
      <View
        style={{
          height: 300,
        }}>
        <CameraTestView />
      </View>
    </View>
  );
}

export default CameraDemoScreen;
