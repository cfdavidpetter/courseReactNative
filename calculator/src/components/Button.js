import React from "react";
import { 
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from "react-native";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
});


export default props => {
    const stylesButton = [styles.button];
    if (props.operationButton) stylesButton.push(styles.operationButton); 
    if (props.buttonDouble) stylesButton.push(styles.buttonDouble); 
    if (props.buttonTriple) stylesButton.push(styles.buttonTriple); 

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}