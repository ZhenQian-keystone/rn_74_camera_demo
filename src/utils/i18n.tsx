import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en";
import zh from "../locales/zh";
import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAsync } from "react-async-hook";


const defaultLanguage = "en";

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources: {
            en: { translation: en },
            zh: { translation: zh }
        },
        lng: defaultLanguage, // if you're using a language detector, do not define the lng option
        fallbackLng: defaultLanguage, // default language when change language failed

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });


// use language hook
export const useLanguage = () => {
    const [language, setLanguage] = useState("en");

    useAsync(async () => {
        await initLanguage()
    }, [])

    const changeLanguage = useCallback(async (l: string) => {
        // save language to async storage
        setLanguage(l)
        await AsyncStorage.setItem('language', l)
        await i18n.changeLanguage(l)
    }, [])

    const initLanguage = useCallback(async () => {
        const l = await AsyncStorage.getItem('language')
        if (l) {
            await changeLanguage(l)
        }
        setLanguage(l || defaultLanguage)
    }, [changeLanguage])

    return { language, changeLanguage }
}

export default i18n;