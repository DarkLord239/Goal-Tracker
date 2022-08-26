import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem(props) {
    return (

        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#210644' }} onPress={props.onDeleteItem.bind(this, props.id)}  >
                <Text style={styles.listStyle}>
                    {props.text}
                </Text>
            </Pressable>
        </View>

    )
};

const styles = StyleSheet.create({
    listStyle: {
        color: '#e6cfcf',
        fontSize: 20,
        padding: 8,
    },
    goalItem: {
        margin: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        backgroundColor: '#1b1b7b',
    }

})

export default GoalItem;