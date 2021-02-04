import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal, ImageBackground} from 'react-native';

const image = { uri: "https://media.giphy.com/media/XfGxvPXC4SYUvw5iAh/source.gif" };

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    };

    const cancelGoalAdd = () => {
        props.onCancel();
        setEnteredGoal("");
    }

    

    return (
        <Modal visible={props.mode} animationType="slide">
            <ImageBackground source={image} style={styles.image}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add a goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttons}>
                <View style={styles.button}><Button 
                    title="CANCEL"
                    color="red"
                    onPress={cancelGoalAdd}
                /></View>
                <View style={styles.button}><Button
                    title="ADD"
                    onPress={addGoalHandler}
                />
                </View></View>
            </View>
            </ImageBackground>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center"
    },
    input: {
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10, 
        width: '80%', 
        borderRadius: 3,
        marginBottom: 10,
        height: 60,
        backgroundColor: 'white',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
        
    },
    button: {
        width: '40%'
    }

})

export default GoalInput;
