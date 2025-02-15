import { ImageBase, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./src/screen/Home";
import Submit from "./src/screen/Submit";
import Create from "./src/screen/Create";



const App = () => {
  <SafeAreaView style={styles.container}>
 <Home/>
  </SafeAreaView>
};



export default App
const styles=StyleSheet.create({
  container:{
    flex:1,
    // alignItems:"center",
    // justifyContent:"center",
  },
});