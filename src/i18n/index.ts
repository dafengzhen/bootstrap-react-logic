import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import indexEn from './en/index.json';
import indexZh from './zh/index.json';
import aboutEn from './en/about.json';
import aboutZh from './zh/about.json';
import genericComponentPropsEn from './en/component/generic-component-props.json';
import genericComponentPropsZh from './zh/component/generic-component-props.json';
import selectMultipleComponentPropsEn from './en/component/select-multiple-component-props.json';
import selectMultipleComponentPropsZh from './zh/component/select-multiple-component-props.json';
import selectOptionComponentPropsEn from './en/component/select-option-component-props.json';
import selectOptionComponentPropsZh from './zh/component/select-option-component-props.json';
import selectComponentPropsEn from './en/component/select-component-props.json';
import selectComponentPropsZh from './zh/component/select-component-props.json';
import selectPageEn from './en/component/select-page.json';
import selectPageZh from './zh/component/select-page.json';

const resources = {
  en: {
    index: indexZh,
    about: aboutEn,
    genericComponentProps: genericComponentPropsEn,
    selectMultipleComponentProps: selectMultipleComponentPropsEn,
    selectOptionComponentProps: selectOptionComponentPropsEn,
    selectComponentProps: selectComponentPropsEn,
    selectPage: selectPageEn,
  },
  zh: {
    index: indexEn,
    about: aboutZh,
    genericComponentProps: genericComponentPropsZh,
    selectMultipleComponentProps: selectMultipleComponentPropsZh,
    selectOptionComponentProps: selectOptionComponentPropsZh,
    selectComponentProps: selectComponentPropsZh,
    selectPage: selectPageZh,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  debug: process.env.NODE_ENV !== 'production',
  defaultNS: 'index',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
