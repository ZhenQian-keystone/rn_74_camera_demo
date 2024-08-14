/* eslint-disable react/react-in-jsx-scope */
import {createContext, ReactNode, useContext, useState} from 'react';

interface DataExample {
  id: string;
  name: string;
  age: number;
}

const useAppStorageHook = () => {
  const [data, setData] = useState<DataExample[]>([]);
  const addData = (eg_data: DataExample) => {
    setData([...data, eg_data]);
  };
  return {
    data,
    addData,
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
