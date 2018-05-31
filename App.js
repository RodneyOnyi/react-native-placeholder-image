/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import FoodExample from './examples/simple';
import MovieExample from './examples/rounded-corners';
import ProfileExample from './examples/circle';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={ { flex: 1 } }>
        {/* <FoodExample /> */}
        {/* <MovieExample /> */}
        <ProfileExample />
      </View>
    );
  }
}
