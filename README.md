
# react-native-react-native-plivo

## Getting started

`$ npm install react-native-react-native-plivo --save`

### Mostly automatic installation

`$ react-native link react-native-react-native-plivo`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-react-native-plivo` and add `RNReactNativePlivo.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativePlivo.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativePlivoPackage;` to the imports at the top of the file
  - Add `new RNReactNativePlivoPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-react-native-plivo'
  	project(':react-native-react-native-plivo').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-react-native-plivo/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-react-native-plivo')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNReactNativePlivo.sln` in `node_modules/react-native-react-native-plivo/windows/RNReactNativePlivo.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using React.Native.Plivo.RNReactNativePlivo;` to the usings at the top of the file
  - Add `new RNReactNativePlivoPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNReactNativePlivo from 'react-native-react-native-plivo';

// TODO: What to do with the module?
RNReactNativePlivo;
```
  