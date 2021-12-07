import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import BookList from "../components/BookList";

const BooksScreen = (props) => {
  console.log(props.navigation);

  return (
    <View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => props.navigation.navigate("BookDetail")}
      >
        <Text>Go to BookDetailScreen</Text>
      </TouchableOpacity>
      <BookList />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 5,
    marginHorizontal: 7,
  },
});

export default BooksScreen;
