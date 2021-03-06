import React, {useContext} from "react";
import {View, StyleSheet, Text, FlatList, Button, TouchableOpacity} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {

const {state, addBlogPost, deleteBlogPost} = useContext(Context);

  return(
    <View>
      <Button 
        title = "Add  Blog"
        onPress = {addBlogPost}
      />
      <FlatList 
        data = {state}
        keyExtractor = {(blogPosts) => blogPosts.title}
        renderItem = {({item}) => {
          return (
            <TouchableOpacity
              onPress = {() => navigation.navigate("Show", {id: item.id})}
            >
              <View style = {styles.row}>
                <Text style = {styles.title}>{item.title} - {item.id}</Text>  
                <TouchableOpacity
                  onPress = {() => deleteBlogPost(item.id)}
                >
                  <Feather style = {styles.icons} name = "trash"/>
                </TouchableOpacity>              
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
    <TouchableOpacity onPress = {() => navigation.navigate("Create")}>
      <Feather name = "plus" size = {30}/>
    </TouchableOpacity>) 
  }
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1, 
    borderColor: "grey"
  },
  title: {
    fontSize: 18
  },
  icons: {
    fontSize: 24
  }
});

export default IndexScreen;