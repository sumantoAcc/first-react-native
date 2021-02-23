import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Dashboard from "./components/Dashboard"
import NewsDesc from "./components/NewsDesc"
import Login from "./components/Login"

export default function App() {
  const [items, setItems] = useState([
    {
      id: Math.floor((Math.random() * 1000)).toString(),
      text: 'Milk'
    },
    {
      id: Math.floor((Math.random() * 1000)).toString(),
      text: 'Chocolate'
    },
    {
      id: Math.floor((Math.random() * 1000)).toString(),
      text: 'Tissue Paper'
    },
    {
      id: Math.floor((Math.random() * 1000)).toString(),
      text: 'Toothbrush'
    },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }
  const addItem = (text) => {
    setItems(prevItems => {
      return [{
        id: Math.floor((Math.random() * 1000)).toString(),
        text: text
      },
      ...prevItems];
    });
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({ item }) =>
          <ListItem item={item}
            deleteItem={deleteItem} />
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
});