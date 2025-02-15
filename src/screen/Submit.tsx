import { useState } from "react";
import { Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const Submit =()=>{
      const [modalVisible, setModalVisible] =useState(true);
    
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.htext}>Today's work</Text>
            <Text style={styles.ordertext}>Order ID-743125AB</Text>
    <View style={styles.profilecard}>
        <Image 
    
        source={{
            uri:"https://cdn.pixabay.com/photo/2022/10/20/04/23/bird-7534030_1280.jpg"
        }}
        style={styles.images}
        />
        <View>
            <Text style={styles.name}> Jay Shah</Text>
            <Text style={styles.email}> Email</Text>
            <Text style={styles.phone}> 9087654321</Text>
                <Text style={styles.details2} >Clasic facial, <Text style={styles.detail}>    +7</Text><Text style={styles.details2}>    $100</Text> </Text>
        <Modal visible={modalVisible} transparent animationType="fade">
            <View style={styles.modalBackground}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Enter your pincode</Text>
                    <Text style={styles.modalText}>so that we can find userfrom your local</Text>
                    <TextInput placeholder="enter your pincode" style={styles.placeholder}></TextInput>
                    <TouchableOpacity style={styles.btn}> 
                        <Text style={styles.btntext}>submit</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
        </View>
    </View>

        </SafeAreaView>
    );
};



const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    htext:{
        fontSize:30,
        fontWeight:"bold",
        margin:20,

    },
    ordertext:{
        fontSize:16,
        color:"gray",
        fontWeight:"bold",
        margin:20

    },
    profilecard:{
            flexDirection: 'row',
           padding:15,
           alignItems:"center",
           backgroundColor:"#ffffff",
           borderRadius:12,
           borderColor:"red",
           borderWidth:1,
           margin:20,
    },
    images:{
        width:90,
        height:90,
        borderRadius:50,
        marginRight:15,
        borderColor:"red",
         borderWidth: 2 ,
         shadowRadius: 10,
         shadowOpacity:0.2,
         shadowColor: '#000',
         elevation: 50,
         padding:15,
    },
    name:{fontSize:18,fontWeight:"bold"},
email:{color:"gray"},
phone:{color:"gray"},
details2:{fontWeight:"bold"},
detail:{marginTop:5,fontWeight:"bold",color:"red",fontSize:18},
modalBackground:{
flex:1,
    backgroundColor: "'#fff",
    alignItems: 'center',
    justifyContent: 'center',
},
modalContent: {
    width: 370,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 5,
marginTop:100
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a2003b',
  },
  modalText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    color: 'gray',
  },
  button: {
    backgroundColor: '#e91e63',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  placeholder:{
    backgroundColor: 'white',
alignItems:"center",
shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 5,
    width:"98%",
    borderRadius:20,
    textAlign:"center"
  },
  
  btn: {
    backgroundColor: 'rgb(0, 171, 107)',
    width: '50%',
    borderRadius: 20,
    padding: 8,
    borderColor: 'brown',
    borderWidth: 1,
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 50,
        marginTop:15,
  },
  btntext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Submit;