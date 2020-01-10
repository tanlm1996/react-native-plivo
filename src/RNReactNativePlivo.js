
import { NativeModules } from 'react-native';

const { RNReactNativePlivo } = NativeModules;

if (!RNReactNativePlivo && __DEV__) {
    console.warn("react-native-plivo module is not correctly linked")
}

export default RNReactNativePlivo;
