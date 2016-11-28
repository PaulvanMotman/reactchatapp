# reactchatapp
A simple one page chat application build with React ES6 and node.js.

# Usage

Make sure to have node and webpack installed.

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

Rebuild the app with webpack (to include api_key)

```shell
webpack
```

Run app and chat!

```shell
node app
```

