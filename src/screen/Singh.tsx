import { useState } from "react";
import { Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const Singh = () => {
    const [modalVisible, setModalVisible] = useState(true);
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.headertext}>Update Service</Text>
            <View>
                <Text style={styles.selectext}>Select  Category</Text>
                <TouchableOpacity style={styles.btnplaceholde}>
                <TextInput placeholder="Threading" style={styles.textplaceholder}></TextInput>
                </TouchableOpacity>
                <Text style={styles.selectext} >Sub Catergory</Text>
                <TouchableOpacity  style={styles.btnplaceholde2}>

                <TextInput placeholder="Sophisticated" style={styles.textplaceholder}></TextInput>
                </TouchableOpacity>
                <Text style={styles.descriptiontext1}>Describe which kind product your are going use </Text>

               <Text style={styles.descriptiontext2}> Note:please write in simole words so our user can </Text> 
               <Text style={styles.descriptiontext3}> relate easly</Text>
            </View>
            <Modal visible={modalVisible} transparent animationType="fade">
<View style={styles.modalBackground}>
    <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Deleted service</Text>
        <Text style={styles.modalText}>Are you want to delete Service</Text>
        <Text style={styles.canceltext}>cancel</Text>
        <Text style={styles.oktext}>ok
        </Text>
    </View>
</View>
            </Modal>
            <View>
                <Text style={styles.seviceTextp}>Service Type</Text>
                <TextInput placeholder="Gold" style={styles.inputText3}></TextInput>
<TouchableOpacity style={styles.btn}>
    <Text style={styles.btntext}>Update</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btn2}>
    <Text style={styles.btntext2}>Delete service</Text>
</TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};




const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        // backgroundColor:'black',
    },
    headertext:{
        fontSize:20,
        fontWeight:"bold",
        color:"red",
        marginTop:-480,
        textAlign:"center",
// padding:10,
    },

    selectext:{
        fontSize:14,
        fontWeight:"bold",
        color:"gray",
        marginRight:250,
        margin:5,
    },
btnplaceholde:{
    backgroundColor:"white",
    borderColor:"gray",
    borderWidth:1,
   height:60,
   margin:10,
},
textplaceholder:{
    fontSize:16,
  marginLeft:20,
  top:5,


},
btnplaceholde2:{
    backgroundColor:"white",
    borderColor:"gray",
    borderWidth:1,
   height:60,
   margin:10,
},
descriptiontext1:{
    fontSize:14,
    color:"gray",
    fontWeight:"bold",
    position:'absolute',
    left:8,
    top:215,

},
descriptiontext2:{
    fontSize:14,
    color:"#000",
    fontWeight:"bold",
    position:'absolute',
    left:6,
    top:230,
},

descriptiontext3:{
    fontSize:14,
    color:"#000",
    fontWeight:"bold",
    position:'absolute',
    left:6,
    top:245,
},
modalBackground: {
    flex: 1,
    backgroundColor: "'#fff",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,

  },
  modalContent: {
    width: 345,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    // alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 5,
    marginTop: -140,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  modalText: {
    fontSize: 14,
    marginBottom:5,
    color: 'gray',
    fontWeight: 'bold',
  },
  canceltext:{
    fontSize:16,
    fontWeight:'bold',
    left:190,
top:20,
  },
  oktext:{
    fontSize:16,
    fontWeight:'bold',
    left:280,
top:0,
  },
  seviceTextp:{
    fontSize:14,
    color:"gray",
    position:'absolute',
    top:200,
    right:93,
  },
  inputText3:{
    backgroundColor:"white",
    borderColor:"gray",
    borderWidth:1,
    position:"absolute",
    marginTop:230,
    height:60,
   right:-170,
    width:'83%',
  },
  btn:{
    width:"83%",
    backgroundColor:"rgba(173, 10, 100, 0.88)",
    position:"absolute",
    top:320,
    right:-170,
   height:50,
   borderRadius:25
  },
  btntext:{
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center",
    color:"white",
    margin:12,
  },
  btn2:{
    width:"83%",
    backgroundColor:"rgba(12, 14, 13, 0.88)",
    position:"absolute",
    top:390,
    right:-170,
   height:50,
   borderRadius:25
  },
  btntext2:{
    fontSize:16,
    fontWeight:"bold",
    textAlign:"center",
    color:"white",
    margin:12,
  },
})
export default Singh