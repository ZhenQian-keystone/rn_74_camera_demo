/* eslint-disable react/react-in-jsx-scope */
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { useAppStorage } from '../../storage/AppStorageProvider';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguageStorage } from '../../storage/LanguageProvider';


function HomeScreen() {
    const navigation = useNavigation();
    const { data, addData, userName, password } = useAppStorage();
    const { t } = useTranslation();
    const [id, setId] = useState(3);
    const { language, changeLanguage } = useLanguageStorage();
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            {/* button to navigate to camera demo screen */}
            <Button
                title={t('home.goToCameraDemo')}
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
            <Button title={t('home.addData')} onPress={clickAddData} />

            {/* show userName and password */}
            <Text>UserName from secure storage: {userName}</Text>
            <Text>Password from secure storage: {password}</Text>

            {/* current language */}
            <Text>Current language: {language}</Text>
            {/* change language */}
            <Button title={t('home.changeLanguage')} onPress={() => {
                language === 'zh' ? changeLanguage('en') : changeLanguage('zh')
            }}
            />
        </View>
    );
}

export default HomeScreen;
