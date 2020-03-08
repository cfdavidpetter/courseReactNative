import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from "./src/components/Button";
import Display from "./src/components/Display";

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component {
  state = { ...initialState };

  addDisplayValue = val => {
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
    
    if (val === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return
    }

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + val;
    this.setState({ displayValue, clearDisplay: false }); 

    if (val !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values }); 
    }
  };

  cliearDisplayValue = () => {
    this.setState({ ...initialState }); 
  }

  setOperation = op => {
    if (this.state.current === 0) {
      this.setState({
        current: 1,
        clearDisplay: true,
        operation: op,
      });
    } else {
      const equals = op === '=';
      const values = [...this.state.values];
      
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (error) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : op,
        current: equals ? 0 : 1,
        //clearDisplay: !equals,
        clearDisplay: true,
        values,
      });
    }
  }

  render() {
    return (
      <View style={styles.contaner}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' buttonTriple onClick={() => this.cliearDisplayValue()} />
          <Button label='/' operationButton onClick={this.setOperation} />
          <Button label='7' onClick={this.addDisplayValue} />
          <Button label='8' onClick={this.addDisplayValue} />
          <Button label='9' onClick={this.addDisplayValue} />
          <Button label='*' operationButton onClick={this.setOperation} />
          <Button label='4' onClick={this.addDisplayValue} />
          <Button label='5' onClick={this.addDisplayValue} />
          <Button label='6' onClick={this.addDisplayValue} />
          <Button label='-' operationButton onClick={this.setOperation} />
          <Button label='1' onClick={this.addDisplayValue} />
          <Button label='2' onClick={this.addDisplayValue} />
          <Button label='3' onClick={this.addDisplayValue} />
          <Button label='+' operationButton onClick={this.setOperation} />
          <Button label='0' buttonDouble onClick={this.addDisplayValue} />
          <Button label='.' onClick={this.addDisplayValue} />
          <Button label='=' operationButton onClick={this.setOperation} />
        </View>
      </View>
    )
  };
};

const styles = StyleSheet.create({
  contaner: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
