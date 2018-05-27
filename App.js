/* global window */
import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import { GOOGLE_FIREBASE_API_KEY } from './apis';
import reducers from './src/reducers';
import { RootNavigator } from './src/Router';
import NavigatorService from './src/Navigator';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const navReducer = (state, action) => {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
};

class AppNavigationWithState extends Component {
  render() {
    return (
      <RootNavigator
        ref={navigatorRef => {
          NavigatorService.setContainer(navigatorRef);
        }}
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })} />
    );
  }
}

const store = createStore(
  reducers(navReducer),
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  ),
);

const mapStateToProps = state => ({nav: state.nav})
const Wrapped = connect(mapStateToProps)(AppNavigationWithState);

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: GOOGLE_FIREBASE_API_KEY,
      authDomain: 'pixelite-1505838442092.firebaseapp.com',
      databaseURL: 'https://pixelite-1505838442092.firebaseio.com',
      // projectId: 'manager-c381e',
      storageBucket: '',
      messagingSenderId: '779653227449',
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Wrapped />
      </Provider>
    );
  }
}

export default App;
