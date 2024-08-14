/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Button, Text, View} from 'react-native';
import CameraTestView from '../../components/CameraTestView';
import {useNavigation} from '@react-navigation/native';
import {useAppStorage} from '../../storage/AppStorageProvider';

function CameraDemoScreen() {
  const navigation = useNavigation();
  const {data, storeUserName, storePassword,getUserName,getPassword,userName,password} = useAppStorage();
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

      {/* show context */}
      <Text>{data.length}</Text>
      {data.map(item => (
        <Text key={item.id}>
          {item.id} {item.name} {item.age}
        </Text>
      ))}

      {/* store userName to secure storage */}
      
      <Button title="Store User Name" onPress={() => storeUserName('John'+Math.random())} />
      <Button title ="Store Password" onPress={() => storePassword('Password'+Math.random())} />
      <Button title="Get User Name" onPress={()=>getUserName()} />
      <Button title="Get Password" onPress={() => getPassword()} />

        {/* show userName and password */}
      <Text>UserName from secure storage: {userName}</Text>
      <Text>Password from secure storage: {password}</Text>
    </View>
  );
}

export default CameraDemoScreen;
