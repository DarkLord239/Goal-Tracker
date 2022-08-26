import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisibil] = useState(false);

  const startAddGoalHandler = () => {
    setModalVisibil(true);
  };

  const endAddGoalHandler = () => {
    setModalVisibil(false);
  };

  const addGoalHandler = (enteredText) => {
    setGoalList((currentGoalList) => [
      ...currentGoalList,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  const deletIetemHandler = (id) => {
    setGoalList(currentGoalList => {
      return currentGoalList.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
    <StatusBar style='auto' />
    <View style={styles.appContainer}>
      <View style={{padding:10}}>
        <Button
          title='Add a new Goal !'
          color="purple"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
      </View>
      <View style={styles.textContainer}>
        <FlatList data={goalList} renderItem={(itemData) => {
          return (<GoalItem
            text={itemData.item.text}
            id={itemData.item.id}
            onDeleteItem={deletIetemHandler}
          />
          );
        }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'gainsboro',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  textContainer: {
    flex: 5,
  },
});
