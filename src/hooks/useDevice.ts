import {useMemo} from 'react';
import {getDeviceId, getVersion} from 'react-native-device-info';

export const useAppVersion = () => useMemo(() => getVersion(), []);
export const useDeviceId = () => useMemo(() => getDeviceId(), []);
