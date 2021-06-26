[https://github.com/Pedro-Alcantara-M/NLW---6](https://github.com/Pedro-Alcantara-M/NLW---6)
- After downloading and opening the program, type `npm install` to install the application's dependencies.
-You can start the application using `npm start` and view it in the browser using [http://localhost:3000](http://localhost:3000)

- Create your project at [https://console.firebase.google.com](https://console.firebase.google.com/), open your project settings and copy the data from `var firebaseConfig` by changing their respective data in `.env.local`

 - Create a `.env.local` file in the root folder and set these variables: 
  ```
    REACT_APP_API_KEY= apiKey
    REACT_APP_AUTH_DOMAIN= authDomain
    REACT_APP_DATABASE_URL= databaseURL
    REACT_APP_PROJECT_ID=  projectId
    REACT_APP_STORAGE_BUCKET= storageBucket
    REACT_APP_MESSAGING_SENDER_ID= messagingSenderId
    REACT_APP_APP_ID= appId
  ```


## Functionalities:
- You can sign in to the app using your google account. create rooms and share with others to ask questions.
- With the questions it is possible to leave a like, highlight it and also mark it as answered
