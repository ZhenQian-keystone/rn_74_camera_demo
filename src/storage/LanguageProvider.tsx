
import { createContext, useContext } from 'react';
import {useLanguage} from '../utils/i18n';

const initialLanguageState = {
    language: 'en',
    changeLanguage: async () => undefined
}


const LanguageContext = createContext<ReturnType<typeof useLanguage>>(initialLanguageState);

const LanguageProvider = ({children}: {children: React.ReactNode}) => {
    const language = useLanguage();
    return <LanguageContext.Provider value={language}>{children}</LanguageContext.Provider>
}

export const useLanguageStorage = () => useContext(LanguageContext)

export default LanguageProvider;