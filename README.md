# FB Clone

A Facebook clone mobile application built with React Native, Expo, and TypeScript.

## Features

- Home Screen
- Profile Screen
- Search Screen
- Settings Screen
- Navigation using React Navigation
- Gesture handling support
- TypeScript integration

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac users) or Android Studio (for Android development)

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd fb-clone
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (iOS development only):

```bash
cd ios
pod install
cd ..
```

## Running the App

### Development

- Start the Expo development server:

```bash
npm start
# or
yarn start
```

- Run on iOS:

```bash
npm run ios
# or
yarn ios
```

- Run on Android:

```bash
npm run android
# or
yarn android
```

### Building for Production

Follow the Expo documentation for building standalone apps for iOS and Android.

## Project Structure

```
fb-clone/
├── app/                  # Application screens
│   └── screen/
│       ├── HomeScreen.tsx
│       ├── ProfileScreen.tsx
│       ├── SearchScreen.tsx
│       └── SettingsScreen.tsx
├── assets/              # Static assets
├── ios/                 # iOS native code
├── android/            # Android native code
└── App.tsx             # Root component
```

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- React Native Gesture Handler
- React Native Reanimated

## Version

Current version: 1.0.0

## License

This project is private and not licensed for public use.
