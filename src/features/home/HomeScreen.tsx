/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {useAppStorage} from '../../storage/AppStorageProvider';
import {useState} from 'react';

function HomeScreen() {
  const navigation = useNavigation();
  const {data, addData} = useAppStorage();

  const [id, setId] = useState(3);
  const clickAddData = () => {
    setId(id + 1);
    addData({
      id: id.toString(),
      name: 'Jane',
      age: 21,
    });
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      {/* button to navigate to camera demo screen */}
      <Button
        title="Go to Camera Demo"
        onPress={() => navigation.navigate('CameraDemo' as never)}
      />
      {/* use context */}
      <Text>{data.length}</Text>
      {/* content of data */}
      {data.map(item => (
        <Text key={item.id}>
          {item.id} {item.name} {item.age}
        </Text>
      ))}
      <Button title="Add Data" onPress={clickAddData} />
    </View>
  );
}

export default HomeScreen;
