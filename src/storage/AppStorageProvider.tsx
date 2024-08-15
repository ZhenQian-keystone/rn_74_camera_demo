/* eslint-disable react/react-in-jsx-scope */
import {createContext, ReactNode, useContext, useState} from 'react';

import {storeSecureItem, getSecureItem} from './secureStorage';

interface DataExample {
  id: string;
  name: string;
  age: number;
}

const useAppStorageHook = () => {
  const [data, setData] = useState<DataExample[]>([]);

  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // store userName to secure storage
  const storeUserName = async (userName: string) => {
    await storeSecureItem('username', userName);
  };

  const getUserName = async () => {
    const userName = await getSecureItem('username');
    if (userName !== null) {
      setUserName(userName);
    }
  };

  const storePassword = async (password: string) => {
    await storeSecureItem('password', password);
  };

  const getPassword = async () => {
    const password = await getSecureItem('password');
    if (password !== null) {
      setPassword(password);
    }
  };

  const addData = (eg_data: DataExample) => {
    setData([...data, eg_data]);
  };
  return {
    data,
    addData,
    userName,
    password,
    storeUserName,
    getUserName,
    storePassword,
    getPassword,
  };
};

const initialState = {
  data: [
    {
      id: '1',
      name: 'John',
      age: 20,
    },
  ] as DataExample[],
  addData: async () => undefined,
  userName: '',
  password: '',
  storeUserName: async () => undefined,
  getUserName: async () => undefined,
  storePassword: async () => undefined,
  getPassword: async () => undefined,
};

const AppStorageContext =
  createContext<ReturnType<typeof useAppStorageHook>>(initialState);

const AppStorageProvider = function ({children}: {children: ReactNode}) {
  return (
    <AppStorageContext.Provider value={useAppStorageHook()}>
      {children}
    </AppStorageContext.Provider>
  );
};
export const useAppStorage = () => useContext(AppStorageContext);

export default AppStorageProvider;
