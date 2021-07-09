import React, { useEffect,useCallback } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const Landing = (props) => {
  return (
    <View>
      <Text>Welcome page</Text>
    </View>
  );
};

Landing.navigationOptions = (navData) => {
  return {
    headerTitle: "Acceuil",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default Landing;
