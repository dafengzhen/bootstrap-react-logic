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
import buttonComponentPropsEn from './en/component/button-component-props.json';
import buttonComponentPropsZh from './zh/component/button-component-props.json';
import buttonPageEn from './en/component/button-page.json';
import buttonPageZh from './zh/component/button-page.json';
import buttonGroupComponentPropsEn from './en/component/button-group-component-props.json';
import buttonGroupComponentPropsZh from './zh/component/button-group-component-props.json';
import buttonGroupPageEn from './en/component/button-group-page.json';
import buttonGroupPageZh from './zh/component/button-group-page.json';
import inputComponentPropsEn from './en/component/input-component-props.json';
import inputComponentPropsZh from './zh/component/input-component-props.json';
import inputPageEn from './en/component/input-page.json';
import inputPageZh from './zh/component/input-page.json';
import inputOtpComponentPropsEn from './en/component/input-otp-component-props.json';
import inputOtpComponentPropsZh from './zh/component/input-otp-component-props.json';
import textareaComponentPropsEn from './en/component/textarea-component-props.json';
import textareaComponentPropsZh from './zh/component/textarea-component-props.json';
import labelComponentPropsEn from './en/component/label-component-props.json';
import labelComponentPropsZh from './zh/component/label-component-props.json';
import textComponentPropsEn from './en/component/text-component-props.json';
import textComponentPropsZh from './zh/component/text-component-props.json';
import inputGroupComponentPropsEn from './en/component/input-group-component-props.json';
import inputGroupComponentPropsZh from './zh/component/input-group-component-props.json';
import inputGroupTextComponentPropsEn from './en/component/input-group-text-component-props.json';
import inputGroupTextComponentPropsZh from './zh/component/input-group-text-component-props.json';
import inputGroupPageEn from './en/component/input-group-page.json';
import inputGroupPageZh from './zh/component/input-group-page.json';
import indexPageEn from './en/component/index-page.json';
import indexPageZh from './zh/component/index-page.json';
import checkboxPageEn from './en/component/checkbox-page.json';
import checkboxPageZh from './zh/component/checkbox-page.json';
import checkboxComponentPropsEn from './en/component/checkbox-component-props.json';
import checkboxComponentPropsZh from './zh/component/checkbox-component-props.json';

const resources = {
  en: {
    index: indexZh,
    about: aboutEn,
    genericComponentProps: genericComponentPropsEn,
    selectMultipleComponentProps: selectMultipleComponentPropsEn,
    selectOptionComponentProps: selectOptionComponentPropsEn,
    selectComponentProps: selectComponentPropsEn,
    selectPage: selectPageEn,
    buttonComponentProps: buttonComponentPropsEn,
    buttonPage: buttonPageEn,
    buttonGroupComponentProps: buttonGroupComponentPropsEn,
    buttonGroupPage: buttonGroupPageEn,
    inputComponentProps: inputComponentPropsEn,
    inputPage: inputPageEn,
    inputOtpComponentProps: inputOtpComponentPropsEn,
    textareaComponentProps: textareaComponentPropsEn,
    labelComponentProps: labelComponentPropsEn,
    textComponentProps: textComponentPropsEn,
    inputGroupComponentProps: inputGroupComponentPropsEn,
    inputGroupTextComponentProps: inputGroupTextComponentPropsEn,
    inputGroupPage: inputGroupPageEn,
    indexPage: indexPageEn,
    checkboxPage: checkboxPageEn,
    checkboxComponentProps: checkboxComponentPropsEn,
  },
  zh: {
    index: indexEn,
    about: aboutZh,
    genericComponentProps: genericComponentPropsZh,
    selectMultipleComponentProps: selectMultipleComponentPropsZh,
    selectOptionComponentProps: selectOptionComponentPropsZh,
    selectComponentProps: selectComponentPropsZh,
    selectPage: selectPageZh,
    buttonComponentProps: buttonComponentPropsZh,
    buttonPage: buttonPageZh,
    buttonGroupComponentProps: buttonGroupComponentPropsZh,
    buttonGroupPage: buttonGroupPageZh,
    inputComponentProps: inputComponentPropsZh,
    inputPage: inputPageZh,
    inputOtpComponentProps: inputOtpComponentPropsZh,
    textareaComponentProps: textareaComponentPropsZh,
    labelComponentProps: labelComponentPropsZh,
    textComponentProps: textComponentPropsZh,
    inputGroupComponentProps: inputGroupComponentPropsZh,
    inputGroupTextComponentProps: inputGroupTextComponentPropsZh,
    inputGroupPage: inputGroupPageZh,
    indexPage: indexPageZh,
    checkboxPage: checkboxPageZh,
    checkboxComponentProps: checkboxComponentPropsZh,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  debug: false,
  defaultNS: 'index',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
