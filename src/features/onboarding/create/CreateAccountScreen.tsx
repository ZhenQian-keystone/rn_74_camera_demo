/* eslint-disable react/react-in-jsx-scope */
import SafeAreaBox from '../../../components/SafeAreaBox';
import Box from '../../../components/Box';
import CloseButton from '../../../components/CloseButton';
import Text from '../../../components/Text';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CreateAccountNavigationProp} from './createAccountNavTypes';
import {useTranslation} from 'react-i18next';

type Props = {inline?: boolean};
const CreateAccountStartScreen = ({inline}: Props) => {
  const navigation = useNavigation<CreateAccountNavigationProp>();
  const onClose = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
  const {t} = useTranslation();
  return (
    <SafeAreaBox
      flex={1}
      backgroundColor="secondaryBackground"
      paddingHorizontal="l">
      <Box width="100%" alignItems="flex-end" visible={!inline}>
        <CloseButton onPress={onClose} />
      </Box>
      <Box justifyContent="center" alignItems="center" flex={1}>
        <Text
          variant="h1"
          fontSize={44}
          textAlign="center"
          lineHeight={44}
          marginTop="l">
          {t('accountSetup.title')}
        </Text>
        <Text
          variant="subtitle1"
          textAlign="center"
          color="secondaryText"
          marginVertical="m">
          {t('accountSetup.subtitle1')}
        </Text>
      </Box>
    </SafeAreaBox>
  );
};

export default CreateAccountStartScreen;
