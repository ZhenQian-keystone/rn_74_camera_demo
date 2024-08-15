/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {useAppStorage} from '../../storage/AppStorageProvider';
import {useCallback, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useLanguageStorage} from '../../storage/LanguageProvider';
import {useAppVersion, useDeviceId} from '../../hooks/useDevice';
import {useColors, useTextVariants} from '../../theme/themeHooks';
import {BottomSheetTestRef} from '../../components/BottomSheetTest';
import BottomSheetSelector from '../../components/BottomSheetTest';
import Buy from '../../assets/images/buy.svg';
function HomeScreen() {
  const navigation = useNavigation();
  const {data, addData, userName, password} = useAppStorage();
  const {t} = useTranslation();
  const [id, setId] = useState(3);
  const {language, changeLanguage} = useLanguageStorage();
  const textVariants = useTextVariants();
  const colors = useColors();
  const clickAddData = () => {
    setId(id + 1);
    addData({
      id: id.toString(),
      name: 'Jane',
      age: 21,
    });
  };

  console.log('======', data);
  console.log('language', language);

  const bottomSheetRef = useRef<BottomSheetTestRef>(null);

  const showBottomSheet = useCallback(() => {
    if (!bottomSheetRef?.current) {
      console.log('bottom sheet ref is null');
      return;
    }
    bottomSheetRef.current?.show();
  }, []);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
      <Button
        title={t('home.changeLanguage')}
        onPress={() => {
          language === 'zh' ? changeLanguage('en') : changeLanguage('zh');
        }}
      />

      {/* show device info */}
      <Text>app version: {useAppVersion()}</Text>
      <Text>device id: {useDeviceId()}</Text>

      {/* 字体样式 */}
      <Text
        style={{
          fontFamily: textVariants.h0.fontFamily,
          color: colors.primaryText,
        }}>
        "Hello World"
      </Text>
      {/* error color */}
      <Text style={{color: colors.error}}>错误颜色</Text>
      {/* 底部弹出框测试 */}
      <BottomSheetSelector ref={bottomSheetRef} />
      <Button title="底部弹出框测试" onPress={showBottomSheet} />

      {/* 图片画廊 */}
      <Button
        title="图片画廊"
        onPress={() => navigation.navigate('SVG' as never)}
      />
      <Buy width={100} height={100} />
    </View>
  );
}

export default HomeScreen;
