import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableNativeFeedback  onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} on>
                <Text style={styles.text}>{"🍅 " + props.item}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ffb861',
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 3,
    },
    text: {
        fontSize: 15
    }
})

export default GoalItem;