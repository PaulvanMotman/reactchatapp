# reactchatapp
A simple one page chat application build with React ES6

#Usage

Install webpack globally.

```shell
npm i -g webpack
```

Install webpack-dev-server too

```shell
npm i -g webpack-dev-server
```

Install dev depenendencies:

```shell
npm install
```

In frontend/src/scripts/main.js insert the api key

``` shell
// Initialize Firebase
var base = Rebase.createClass({
    // INSERT API KEY HERE
    apiKey: INSERT_KEY,
    authDomain: "chat-appje.firebaseapp.com",
    databaseURL: "https://chat-appje.firebaseio.com",
    storageBucket: "chat-appje.appspot.com",
    messagingSenderId: "71709059581"
});
```


Run app
```shell
node app
```

