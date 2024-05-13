import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie Collection</Text>
      <TextInput
        placeholder="Add a movie or book"
        value={inputValue}
        onChangeText={text => setInputValue(text)}
        style={styles.input}
      />
      <Button title="Add" onPress={handleSubmit} />
      <View style={styles.listContainer}>
        {items.map((item, index) => (
          <Text key={index} style={styles.item}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  listContainer: {
    marginTop: 20,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomePage;
