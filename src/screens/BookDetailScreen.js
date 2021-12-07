import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BookDetailScreen = (props) => {
  const book = props.navigation.getParam("book");

  return (
    <View>
      <Text>
        {book.title} - {book.author}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookDetailScreen;
