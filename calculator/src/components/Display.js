import React from "react";
import { 
    StyleSheet,
    Text,
    View
} from "react-native";

const styles = StyleSheet.create({
    diplay: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#333',
        borderColor: '#888',
    },
    diplayValue: {
        color: '#fff',
        fontSize: 60,
        padding: 10
    }
});

export default props => {
    return (
        <View style={styles.diplay}>
            <Text style={styles.diplayValue} numberOfLines={1}>
                {props.value}                
            </Text>
        </View>
    );
}