import RNReactNativePlivo from "./RNReactNativePlivo";
import { SharedEventEmitter } from './events';
import Incoming from "react-native-plivo/src/Incoming";
import Outgoing from "react-native-plivo/src/Outgoing";

class EndPoint {
  _isLoggedIn = false;
  constructor() {
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onIncomingCall',
      (event) => {
        SharedEventEmitter.emit(
          'onIncomingCall',
          new Incoming(event.callUUID)
        );
      }
    );

   //

    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onIncomingCallHangup',
      (event) => {
        SharedEventEmitter.emit(
          'onIncomingCallHangup',
          new Incoming(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onIncomingCallRejected',
      (event) => {
        SharedEventEmitter.emit(
          'onIncomingCallRejected',
          new Incoming(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onOutgoingCall',
      (event) => {
        SharedEventEmitter.emit(
          'onOutgoingCall',
          new Outgoing(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onOutgoingCallAnswered',
      (event) => {
        SharedEventEmitter.emit(
          'onOutgoingCallAnswered',
          new Outgoing(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onOutgoingCallRejected',
      (event) => {
        SharedEventEmitter.emit(
          'onOutgoingCallRejected',
          new Outgoing(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onOutgoingCallHangup',
      (event) => {
        SharedEventEmitter.emit(
          'onOutgoingCallHangup',
          new Outgoing(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onOutgoingCallInvalid',
      (event) => {
        SharedEventEmitter.emit(
          'onOutgoingCallInvalid',
          new Outgoing(event.callUUID)
        );
      }
    );


    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onLogin',
      (event) => {
        SharedEventEmitter.emit(
          'onLogin'
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onLoginFailed',
      (event) => {
        SharedEventEmitter.emit(
          'onLoginFailed'
        );
      }
    );
  }

  call(phoneNumber) {
    RNReactNativePlivo.call(phoneNumber);
  }

  callH(phoneNumber, headers) {
    RNReactNativePlivo.callH(phoneNumber, headers);
  }

  login(username, password, fcmToken, certificateId) {
    RNReactNativePlivo.login(username, password, fcmToken, certificateId);

  }
  logout() {
    RNReactNativePlivo.logout();
    this._isLoggedIn = false;
  }


  get getCallUUID() {

  }

  get getLastCallUUID() {
    return 'kwehfiweh'
  }

  setLoggedIn() {
    this._isLoggedIn = true;
  }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  onIncomingCall(listener) {
    if (typeof listener !== "function") {
      throw new Error("onIncomingCall require a function");
    }
    SharedEventEmitter.addListener('onIncomingCall', listener);
    return () => SharedEventEmitter.removeListener('onIncomingCall', listener);
  }

  onLogin(listener) {
    if (typeof listener !== "function") {
      throw new Error("onLogin require a function");
    }
    SharedEventEmitter.addListener('onLogin', listener);
    return () => SharedEventEmitter.removeListener('onLogin', listener);
  }

  onLoginFailed(listener) {
    if (typeof listener !== "function") {
      throw new Error("onLoginFailed require a function");
    }
    SharedEventEmitter.addListener('onLoginFailed', listener);
    return () => SharedEggventEmitter.removeListener('onLoginFailed', listener);
  }
  onIncomingCallHangup(listener) {
    if (typeof listener !== "function") {
      throw new Error("onIncomingCallHangup require a function");
    }
    SharedEventEmitter.addListener('onIncomingCallHangup', listener);
    return () => SharedEventEmitter.removeListener('onIncomingCallHangup', listener);
  }
  onIncomingCallRejected(listener) {
    if (typeof listener !== "function") {
      throw new Error("onIncomingCallRejected require a function");
    }
    SharedEventEmitter.addListener('onIncomingCallRejected', listener);
    return () => SharedEventEmitter.removeListener('onIncomingCallRejected', listener);
  }
  onOutgoingCall(listener) {
    if (typeof listener !== "function") {
      throw new Error("onOutgoingCall require a function");
    }
    SharedEventEmitter.addListener('onOutgoingCall', listener);
    return () => SharedEventEmitter.removeListener('onOutgoingCall', listener);
  }
  onOutgoingCallAnswered(listener) {
    if (typeof listener !== "function") {
      throw new Error("onOutgoingCallAnswered require a function");
    }
    SharedEventEmitter.addListener('onOutgoingCallAnswered', listener);
    return () => SharedEventEmitter.removeListener('onOutgoingCallAnswered', listener);
  }
  onOutgoingCallRejected(listener) {
    if (typeof listener !== "function") {
      throw new Error("onOutgoingCallRejected require a function");
    }
    SharedEventEmitter.addListener('onOutgoingCallRejected', listener);
    return () => SharedEventEmitter.removeListener('onOutgoingCallRejected', listener);
  }
  onOutgoingCallHangup(listener) {
    if (typeof listener !== "function") {
      throw new Error("onOutgoingCallHangup require a function");
    }
    SharedEventEmitter.addListener('onOutgoingCallHangup', listener);
    return () => SharedEventEmitter.removeListener('onOutgoingCallHangup', listener);
  }
  onOutgoingCallInvalid(listener) {
    if (typeof listener !== "function") {
      throw new Error("onOutgoingCallInvalid require a function");
    }
    SharedEventEmitter.addListener('onOutgoingCallInvalid', listener);
    return () => SharedEventEmitter.removeListener('onOutgoingCallInvalid', listener);
  }

}

export default EndPoint;
