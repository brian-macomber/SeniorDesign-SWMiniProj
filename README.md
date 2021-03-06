# Covid-19 Monitoring App

### Senior Design F20 SW Mini Project

### Objectives

- Create a mobible application that allows users to track their symptons of COVID-19 daily.
- The application should use a third party login (SSO) to securely log in and authenticate the user.
- Store user data in a database so the user can view their past symptoms
- Enhance the application with extra COVID-19 data pertaining to the user's location (in pratice this is just for the US).

#### Note: The application we created is only an ios app, so to run the project you must have Xcode (must be run on MacOS)

### How to Run

- Clone this repository to your local machine
- Install dependencies:
  - Install node and watchman using homebrew:  
    `brew install node`  
    `brew install watchman`
  - Install Xcode from the Mac App Store
  - Install CocoaPods using Ruby:  
    `sudo gem install cocoapods`
  - Navigate into `COVIDapp_SD` and install package dependencies for yarn and npm:  
    `npm install`  
    `yarn upgrade`
  - Navigate into the project folder and install the pods required:  
    `cd ios/ && pod install`
  - Return to the project folder and run the app using npx:  
    `cd .. && npx react-native run-ios`

### How to use the App

- Open the app and click the login button to log in through Google.
- Proceed past the login screen once google authentication is successful to the home page.
- At the home page, the user can view COVID-19 data in their area (as stated above, in practice this is only the US).
- Click on the top right to take the COVID-19 survey and get assigned a badge.
- Badge System:
  - Green: no COVID-19 related symptoms!
  - Yellow: potential for showing COVID-19 related symptoms
  - Red: previous test for COVID-19 came back positive
- From the home page, one can navigate to the questionnaire, badge page, or the settings page.

Application created by Brian Macomber and Carlos Padilha
