import { NativeEventEmitter} from 'react-native';
import RNReactNativePlivo from "./RNReactNativePlivo";
import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";

export const SharedEventEmitter = new EventEmitter();

const nativeEmitter = new NativeEventEmitter(RNReactNativePlivo);
nativeEmitter.addListener('Plivo-onIncomingCall', event => {
  SharedEventEmitter.emit('onIncomingCall', event);
})

nativeEmitter.addListener('Plivo-onLogin', event => {
  console.log('PLIVO_ONLOGIN')
  SharedEventEmitter.emit('onLogin', event);
})

nativeEmitter.addListener('Plivo-onLoginFailed', event => {
  SharedEventEmitter.emit('onLoginFailed', event);
})

nativeEmitter.addListener('Plivo-onLogout', event => {
  SharedEventEmitter.emit('onLogout', event);
})

nativeEmitter.addListener('Plivo-onIncomingCallHangup', event => {
  SharedEventEmitter.emit('onIncomingCallHangup', event);
})

nativeEmitter.addListener('Plivo-onIncomingCallRejected', event => {
  SharedEventEmitter.emit('onIncomingCallRejected', event);
})

nativeEmitter.addListener('Plivo-onOutgoingCall', event => {
  SharedEventEmitter.emit('onOutgoingCall', event);
})

nativeEmitter.addListener('Plivo-onOutgoingCallAnswered', event => {
  SharedEventEmitter.emit('onOutgoingCallAnswered', event);
})

nativeEmitter.addListener('Plivo-onOutgoingCallRejected', event => {
  SharedEventEmitter.emit('onOutgoingCallRejected', event);
})

nativeEmitter.addListener('Plivo-onOutgoingCallHangup', event => {
  SharedEventEmitter.emit('onOutgoingCallHangup', event);
})

nativeEmitter.addListener('Plivo-onOutgoingCallInvalid', event => {
  SharedEventEmitter.emit('onOutgoingCallInvalid', event);
})





