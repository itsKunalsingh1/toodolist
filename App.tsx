import { SafeAreaView, StyleSheet, Text } from "react-native";
import Visual from "./src/screen/Visual"
const App = () => {
  return(

 
  <SafeAreaView style={styles.container}>
    <Visual/>
  </SafeAreaView>
   )
}


export default App
const styles=StyleSheet.create({

  container:{
    flex:1,
  }
})