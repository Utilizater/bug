import React, {useContext, useState} from "react";
import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import {Context} from "../context/BlogContext";

const ShowScreen = ({navigation}) => {

const {state} = useContext(Context);

const blogPosts = state.find((blogPosts) => blogPosts.id === navigation.getParam("id"));

  return(
    <View>
      <Text style = {styles.label}>{blogPosts.title}</Text>
      <Text style = {styles.label}>{blogPosts.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default ShowScreen;