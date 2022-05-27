import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet } from "react-native";
import { Navigation } from "./src/components/Navigation.js";

function App(){
  return(
        <>
            <Navigation />
        </>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    paddingLeft: 15
  },
  header: {
    height: 70,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    paddingBottom: 10
  },
  card: {
    flexDirection: "row",
    height: 100,
    padding: 20,
    backgroundColor: '#0001FC',
    opacity: 0.3,
    margin: '4%'
  }
})

export default App;