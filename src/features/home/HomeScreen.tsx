/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      {/* button to navigate to camera demo screen */}
      <Button
        title="Go to Camera Demo"
        onPress={() => navigation.navigate('CameraDemo' as never)}
      />
    </View>
  );
}

export default HomeScreen;
