import React, {memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import Plus from '../../assets/images/plus.svg';
import DownArrow from '../../assets/images/importIcon.svg';
import Ledger from '../../assets/images/ledger.svg';
import {useColors} from '../../theme/themeHooks';
import Text from '../../components/Text';
import Box from '../../components/Box';
import SafeAreaBox from '../../components/SafeAreaBox';
import BackgroundFill from '../../components/BackgroundFill';
import TouchableOpacityBox from '../../components/TouchableOpacityBox';
const CreateImportAccountScreen = () => {
  const {t} = useTranslation();
  const colors = useColors();

  const createAccount = useCallback(() => {
    console.log('createAccount');
    // navigation.navigate('CreateAccount');
  }, []);

  const importAccount = useCallback(() => {
    console.log('importAccount');
    // navigation.navigate('ImportAccount');
  }, []);

  const connectLedger = useCallback(() => {
    console.log('connectLedger');
    // navigation.navigate('LedgerNavigator');
  }, []);

  return (
    <SafeAreaBox flex={1} paddingHorizontal="l" justifyContent="center">
      <Text variant="h0">{t('accountSetup.createImport.title')}</Text>
      <Box marginVertical="l" borderRadius="xl" overflow="hidden">
        {/* 导入账户 */}
        <BackgroundFill backgroundColor="surfaceContrast" opacity={0.06} />
        <TouchableOpacityBox onPress={importAccount} padding="lm">
          <Box flexDirection="row" alignItems="center">
            <Text variant="subtitle1" color="blueBright500" flex={1}>
              {t('accountSetup.createImport.import')}
            </Text>
            <DownArrow height={20} width={20} color={colors.blueBright500} />
          </Box>
        </TouchableOpacityBox>

        {/* 创建账户 */}
        <Box height={1} backgroundColor="primaryBackground" />
        <TouchableOpacityBox onPress={createAccount} padding="lm">
          <Box flexDirection="row" alignItems="center">
            <Text variant="subtitle1" color="greenBright500" flex={1}>
              {t('accountSetup.createImport.create')}
            </Text>
            <Plus height={20} width={20} color={colors.greenBright500} />
          </Box>
        </TouchableOpacityBox>

        {/* 连接Ledger */}
        <Box height={1} backgroundColor="primaryBackground" />
        <TouchableOpacityBox onPress={connectLedger} padding="lm">
          <Box flexDirection="row" alignItems="center">
            <Text variant="subtitle1" flex={1}>
              {t('accountSetup.createImport.ledger')}
            </Text>
            <Ledger height={20} width={20} color={colors.primaryText} />
          </Box>
        </TouchableOpacityBox>
      </Box>
    </SafeAreaBox>
  );
};

export default memo(CreateImportAccountScreen);
