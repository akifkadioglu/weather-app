import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import { localeLanguage } from './locales/languages';
import { storage } from './storage';


function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}
export const i18n = new I18n(loadLocaleMessages());


i18n.locale = getLocales()[0].languageCode == localeLanguage.ENGLISH ? localeLanguage.ENGLISH : localeLanguage.TURKISH
