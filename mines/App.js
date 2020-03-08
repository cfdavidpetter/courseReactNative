import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ViewComponent,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import params from "./src/params";
import Field from "./src/components/Field";



export default class App extends Component {
  render() {
    return (
      <View style={styles.contaner}>
        <Text style={styles.text}>...{params.getColumnsAmount()} x {params.getRowsAmount()}</Text>

        <Field />
        <Field opened />
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={4}/>
        <Field opened nearMines={5}/>
        <Field opened nearMines={6}/>
        <Field opened nearMines={7}/>
        <Field opened mined />
        <Field opened mined exploded />
      </View>
    )
  };
};

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 40,
  }
});
