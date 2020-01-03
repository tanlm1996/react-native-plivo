
# react-native-plivo

## Getting started

`$ npm install react-native-plivo --save`

### Mostly automatic installation

`$ react-native link react-native-plivo`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-plivo` and add `RNReactNativePlivo.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativePlivo.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrarynativeplivo.RNReactNativePlivoPackage;` to the imports at the top of the file
  - Add `new RNReactNativePlivoPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-plivo'
  	project(':react-native-plivo').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-plivo/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      implementation project(':react-native-plivo')
  	```

## Usage
```javascript
import RNReactNativePlivo from 'react-native-plivo';

// TODO: What to do with the module?
RNReactNativePlivo;
```
