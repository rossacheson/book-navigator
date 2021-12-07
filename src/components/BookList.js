import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import books from "../../data/books.json";

const BookList = (props) => {
  return (
    <View>
      <FlatList
        data={books}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.title}</Text>;
        }}
        keyExtractor={(book) => book.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default BookList;
