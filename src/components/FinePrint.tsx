import React, {memo} from 'react';
import {Linking, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';
import {BoxProps} from '@shopify/restyle';
import {Theme} from '../theme/theme';
import Text from './Text';
import Box from './Box';

type Props = BoxProps<Theme>;

const FinePrint = (boxProps: Props) => {
  const {t} = useTranslation();
  return (
    <Box {...boxProps} flexDirection="row" flexWrap="wrap">
      <Text variant="body2" color="secondaryText">
        {t('finePrint.body')}{' '}
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.google.com')}>
        <Text variant="body2" color="blueBright500">
          {t('settings.sections.finePrint.termsOfService')}
        </Text>
      </TouchableOpacity>
      <Text variant="body2" color="secondaryText">
        {t('generic.and')}{' '}
      </Text>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.google.com')}>
        <Text variant="body2" color="blueBright500">
          {t('settings.sections.finePrint.privacyPolicy')}
        </Text>
      </TouchableOpacity>
      <Text variant="body2" color="secondaryText">
        {t('generic.period')}
      </Text>
    </Box>
  );
};

export default memo(FinePrint);
