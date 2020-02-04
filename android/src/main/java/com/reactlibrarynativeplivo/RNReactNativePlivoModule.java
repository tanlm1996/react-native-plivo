
package com.reactlibrarynativeplivo;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.plivo.endpoint.Endpoint;
import com.plivo.endpoint.EventListener;
import com.plivo.endpoint.Incoming;
import com.plivo.endpoint.Outgoing;

import java.util.HashMap;
import java.util.Map;

public class RNReactNativePlivoModule extends ReactContextBaseJavaModule implements EventListener {

    private final ReactApplicationContext reactContext;
    private Map<String, Incoming> incomingMap = new HashMap<>();
    private Map<String, Outgoing> outgoingMap = new HashMap<>();
    private Endpoint endpoint;

    public RNReactNativePlivoModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        endpoint = new Endpoint(true, this);
    }

    @Override
    public String getName() {
        return "RNReactNativePlivo";
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

    @ReactMethod
    public void show(String text) {
        Context context = getReactApplicationContext();
        Toast.makeText(context, text, Toast.LENGTH_LONG).show();
    }


    @ReactMethod
    public void login(String username, String password) {
        boolean ketqua = endpoint.login(username, password);
    }

    @ReactMethod
    public void login(String username, String password, String fcmToken) {
      boolean ketqua = endpoint.login(username, password, fcmToken);
    }

    @ReactMethod
    public void login(String username, String password, String fcmToken, String certificateId) {

      boolean ketqua = endpoint.login(username, password, fcmToken, certificateId);
    }

    @ReactMethod
    public void logout() {
        endpoint.logout();
    }


    @ReactMethod
    public void call(String phoneNumber) {
        Outgoing outgoing = endpoint.createOutgoingCall();
        boolean resultCall = outgoing.call(phoneNumber);
        Log.i("CALL", String.valueOf(resultCall));
    }

    @ReactMethod
    public void callH(String phoneNumber, ReadableMap headers) {
      Map<String, String> extraHeaders = new HashMap<>();
      extraHeaders.put("X-PH-destNumber", headers.getString("destNumber"));

      Outgoing outgoing = endpoint.createOutgoingCall();
      outgoing.callH(phoneNumber, extraHeaders);
    }

  /**
   * For incoming only
     *
     * @param callUUID Identity of call
     *                 Answer a call
     */
    @ReactMethod
    public void answer(String callUUID) {
        Incoming incoming = incomingMap.get(callUUID);
        if (incoming != null) {
            incoming.answer();
        } else {
            Log.w("PLIVO_ANSWER", "Incoming call is not exist in incomingMap");
        }
    }

    /**
     * For incoming only
     *
     * @param callUUID
     */
    @ReactMethod
    public void reject(String callUUID) {
        Incoming incoming = incomingMap.get(callUUID);
        if (incoming != null) {
            incoming.reject();
        } else {
            Log.w("PLIVO_REJECT", "Incoming call is not exist in incomingMap");
        }

    }


    @ReactMethod
    public void mute(String callUUID) {
        Incoming incoming = incomingMap.get(callUUID);
        if (incoming != null) {
            incoming.mute();
            return;
        }
        Outgoing outgoing = outgoingMap.get(callUUID);
        if (incoming != null) {
            outgoing.mute();
        }
    }

    @ReactMethod
    public void unmute(String callUUID) {
        Incoming incoming = incomingMap.get(callUUID);
        if (incoming != null) {
            incoming.unmute();
            return;
        }
        Outgoing outgoing = outgoingMap.get(callUUID);
        if (incoming != null) {
            outgoing.unmute();
        }
    }

    @ReactMethod
    public void hangup(String callUUID) {
        Incoming incoming = incomingMap.get(callUUID);
        if (incoming != null) {
            incoming.hangup();
            return;
        }
        Outgoing outgoing = outgoingMap.get(callUUID);
        if (incoming != null) {
            outgoing.hangup();
        }
    }

    @Override
    public void onLogin() {
        sendEvent(reactContext, "Plivo-onLogin", null);
    }

    @Override
    public void onLogout() {
        sendEvent(reactContext, "Plivo-onLogout", null);
    }

    @Override
    public void onLoginFailed() {
        sendEvent(reactContext, "Plivo-onLoginFailed", null);
    }

    @Override
    public void onIncomingDigitNotification(String s) {

    }

    @Override
    public void onIncomingCall(Incoming incoming) {
        //Add to incomming list
        incomingMap.put(incoming.getCallId(), incoming);
        //TODO Send event to JS
        WritableMap params = Arguments.createMap();
        params.putString("callUUID", incoming.getCallId());
        sendEvent(reactContext, "Plivo-onIncomingCall", params);
    }

    @Override
    public void onIncomingCallHangup(Incoming incoming) {
        incomingMap.remove(incoming.getCallId());
        WritableMap params = Arguments.createMap();
        params.putString("callUUID", incoming.getCallId());
        sendEvent(reactContext, "Plivo-onIncomingCallHangup", params);
    }

    @Override
    public void onIncomingCallRejected(Incoming incoming) {
        incomingMap.remove(incoming.getCallId());
        WritableMap params = Arguments.createMap();
        params.putString("callUUID", incoming.getCallId());
        sendEvent(reactContext, "Plivo-onIncomingCallRejected", params);
    }

  @Override
  public void onIncomingCallInvalid(Incoming incoming) {

  }

  @Override
    public void onOutgoingCall(Outgoing outgoing) {
        outgoingMap.put(outgoing.getCallId(), outgoing);
        WritableMap params = Arguments.createMap();
        params.putString("callUUID", outgoing.getCallId());
        sendEvent(reactContext, "Plivo-onOutgoingCall", params);
    }

    @Override
    public void onOutgoingCallAnswered(Outgoing outgoing) {
        outgoingMap.put(outgoing.getCallId(), outgoing);
        WritableMap params = Arguments.createMap();
        params.putString("callUUID", outgoing.getCallId());
        sendEvent(reactContext, "Plivo-onOutgoingCallAnswered", params);
    }

    @Override
    public void onOutgoingCallRejected(Outgoing outgoing) {
        outgoingMap.put(outgoing.getCallId(), outgoing);
        WritableMap params = Arguments.createMap();
        params.putString("callUUID", outgoing.getCallId());
        sendEvent(reactContext, "Plivo-onOutgoingCallRejected", params);
    }

    @Override
    public void onOutgoingCallHangup(Outgoing outgoing) {
        outgoingMap.put(outgoing.getCallId(), outgoing);
        WritableMap params = Arguments.createMap();
        params.putString("callUUID", outgoing.getCallId());
        sendEvent(reactContext, "Plivo-onOutgoingCallHangup", params);
    }

    @Override
    public void onOutgoingCallInvalid(Outgoing outgoing) {
        outgoingMap.put(outgoing.getCallId(), outgoing);
        WritableMap params = Arguments.createMap();
        params.putString("callUUID", outgoing.getCallId());
        sendEvent(reactContext, "Plivo-onOutgoingCallInvalid", params);
    }

  @Override
  public void mediaMetrics(HashMap hashMap) {

  }
}
