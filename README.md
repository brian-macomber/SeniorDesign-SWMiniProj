# Covid-19 Monitoring App

### Senior Design F20 SW Mini Project

### Objectives

- Create a mobible application that allows users to track their symptons of COVID-19 daily.
- The application should use a third party login (SSO) to securely log in and authenticate the user.
- Store user data in a database so the user can view their past symptoms
- Enhance the application with extra COVID-19 data pertaining to the user's area (in pratice this is just for the US).

#### Note: The application we created is only an ios app, so to run the project you must have Xcode (must be run on MacOS)

### How to Run

- Clone this repository to your local machine
- Install Dependencies:
  - Install node and watchman by using homebrew:
    `brew install node`
    `brew install watchman`
  - Install Xcode from the Mac App Store
  - Install CocoaPods using Ruby:
    `sudo gem install cocoapods`
  - Navigate into `COVISapp_SD` and install package dependencies for yarn and npm:
    `npm install`
    `yarn upgrade`
  - Navigate into the project folder and install the pods required:
    `cd ios/ && pod install`
  - Return to the projecy folder and run the app using npx:
    `cd .. && npx react-native run-ios`

Brian Macomber and Carlos Padilha
