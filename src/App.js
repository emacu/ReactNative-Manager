import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';


class App extends Component {

  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyB5_BicvToV9BGmqamuj3Wy3RkVI16_nCI',
    authDomain: 'manager-729a3.firebaseapp.com',
    databaseURL: 'https://manager-729a3.firebaseio.com',
    storageBucket: 'manager-729a3.appspot.com',
    messagingSenderId: '300860980498'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
export default App;
