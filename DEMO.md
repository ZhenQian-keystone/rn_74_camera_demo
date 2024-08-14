## 0x1、开始集成
```
// Using latest RN 0.74.5 have the issue.
// Create the latest version (0.74.5) of react native project
npx react-native@latest init rn_74_camera_demo

// Install the latest version of react-native-vision-camera ("^4.5.1")
yarn add react-native-vision-camera
npx pod-install

// run android
npx react-native run-android

```
## 0x2、开发环境
```bash
~/Documents/rn_74_camera_demo[main~] react-native info       
info Fetching system and libraries information...
(node:13004) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
System:
  OS: macOS 14.4.1
  CPU: (12) arm64 Apple M2 Pro
  Memory: 60.72 MB / 16.00 GB
  Shell:
    version: "5.9"
    path: /bin/zsh
Binaries:
  Node:
    version: 18.20.2
    path: /usr/local/bin/node
  Yarn:
    version: 3.6.4
    path: /opt/homebrew/bin/yarn
  npm:
    version: 10.5.0
    path: /usr/local/bin/npm
  Watchman:
    version: 2024.07.15.00
    path: /opt/homebrew/bin/watchman
Managers:
  CocoaPods:
    version: 1.15.2
    path: /usr/local/bin/pod
SDKs:
  iOS SDK:
    Platforms:
      - DriverKit 23.5
      - iOS 17.5
      - macOS 14.5
      - tvOS 17.5
      - visionOS 1.2
      - watchOS 10.5
  Android SDK:
    Android NDK: 22.1.7171670
IDEs:
  Android Studio: 2023.3 AI-233.14808.21.2331.11709847
  Xcode:
    version: 15.4/15F31d
    path: /usr/bin/xcodebuild
Languages:
  Java:
    version: 17.0.12
    path: /opt/homebrew/opt/openjdk@17/bin/javac
  Ruby:
    version: 3.3.4
    path: /opt/homebrew/opt/ruby/bin/ruby
npmPackages:
  "@react-native-community/cli": Not Found
  react:
    installed: 18.2.0
    wanted: 18.2.0
  react-native:
    installed: 0.74.5
    wanted: 0.74.5
  react-native-macos: Not Found
npmGlobalPackages:
  "*react-native*": Not Found
Android:
  hermesEnabled: true
  newArchEnabled: false
iOS:
  hermesEnabled: true
  newArchEnabled: false

```


## 0x3、集成结果
android 模拟器后摄像头：
![img](./img/back_ca.png)

andorid 模拟器前摄像头：
![img](./img/front_ca.png)