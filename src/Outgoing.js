import RNReactNativePlivo from "./RNReactNativePlivo";

class Outgoing {
  _callUUID;
  constructor(callUUID) {
    this._callUUID = callUUID;
  }

  call() {

  }

  mute() {
    RNReactNativePlivo.mute(this._callUUID);
  }

  unmute() {
    RNReactNativePlivo.unmute(this._callUUID);
  }

  sendDigits() {
  }

  hangup() {
    RNReactNativePlivo.unmute(this._callUUID);
  }

}

export default Outgoing;
