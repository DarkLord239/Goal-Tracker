import { useState } from 'react';
import { TextInput, Button, View, StyleSheet, Modal, Image } from 'react-native'

function GoalInput(props) {
    const [enteredText, setEnteredText] = useState('');


    const goalInputHandler = (enteredText) => {
        setEnteredText(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredText);
        setEnteredText('');
    }
    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inpButt}>
                <Image style={styles.img}
                 source={require('../assets/images/Goal.jpg')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Add a goal!'
                    onChangeText={goalInputHandler}
                    value={enteredText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.styleButton}>
                        <Button
                            title='Your goal'
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.styleButton}>
                        <Button title="cancel" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textInput: {

        borderWidth: 2,
        borderColor: 'grey',
        width: '90%',
        padding: 10,
    },
    inpButt: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,

    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
    },
    styleButton: {
        width: '35%',
        marginHorizontal:8,
    },
    img:{
        width: '100%',
        height:'20%',
        margin:20,
    }
})

export default GoalInput;