import { Image, SafeAreaView,StyleSheet, Text, TouchableOpacity, View } from "react-native";




const Random= () => {
    return(
        <SafeAreaView style={styles.container}>
                        <View style={styles.card}> 
                <View style={styles.cardHeader}>
                <Image
                
                source={{
                
                uri:"https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg"

                }}
                
                style={styles.profileImage}
                />
            </View>
            <Text style={styles.name}>jay shah</Text>
      <Text style={styles.email}>jayshah123@gmail.com</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Ask to Follow</Text>
      </TouchableOpacity>
            </View>

            <View style={styles.card}> 
                <View style={styles.cardHeader}>
                <Image
                
                source={{
                
                uri:"https://st5.depositphotos.com/23188010/77062/i/450/depositphotos_770624600-stock-photo-green-field-morning-render-illustration.jpg"

                }}
                
                style={styles.profileImage}
                />
            </View>
            <Text style={styles.name}>jay shah</Text>
      <Text style={styles.email}>jayshah123@gmail.com</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Ask to Follow</Text>
      </TouchableOpacity>
            </View>

            <View style={styles.card}> 
                <View style={styles.cardHeader}>
                <Image
                
                source={{
                
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7EAR8LHWgsuIaLMkpTCwHsASQk8P2I4OWv86AYzlnWU-AFF-_nGqj2ZB9KjZw3cajqC0&usqp=CAU"

                }}
                
                style={styles.profileImage}
                />
            </View>
            <Text style={styles.name}>jay shah</Text>
      <Text style={styles.email}>jayshah123@gmail.com</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Ask to Follow</Text>
      </TouchableOpacity>
            </View>

            <View style={styles.card}> 
                <View style={styles.cardHeader}>
                <Image
                
                source={{
                
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"

                }}
                
                style={styles.profileImage}
                />
            </View>
            <Text style={styles.name}>jay shah</Text>
      <Text style={styles.email}>jayshah123@gmail.com</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Ask to Follow</Text>
      </TouchableOpacity>
            </View>


            <View style={styles.card}> 
                <View style={styles.cardHeader}>
                <Image
                
                source={{
                
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVGHL9r9OucwArH8yO3rEDPryG4V3tSCBw-w&s"

                }}
                
                style={styles.profileImage}
                />
            </View>
            <Text style={styles.name}>jay shah</Text>
      <Text style={styles.email}>jayshah123@gmail.com</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Ask to Follow</Text>
      </TouchableOpacity>
            </View>


            <View style={styles.card}> 
                <View style={styles.cardHeader}>
                <Image
                
                source={{
                
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKFXnQPm3COQ9nPZiMmbhvfo-sAHvBozV_A&s"

                }}
                
                style={styles.profileImage}
                />
            </View>
            <Text style={styles.name}>jay shah</Text>
      <Text style={styles.email}>jayshah123@gmail.com</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Ask to Follow</Text>
      </TouchableOpacity>
            </View>

            <View style={styles.card}> 
                <View style={styles.cardHeader}>
                <Image
                
                source={{
                
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymIX9nnyHCZoUUNG_ZTfxZOSa6GfqGgQDgg&s"

                }}
                
                style={styles.profileImage}
                />
            </View>
            <Text style={styles.name}>jay shah</Text>
      <Text style={styles.email}>jayshah123@gmail.com</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Ask to Follow</Text>
      </TouchableOpacity>
            </View>

            <View style={styles.card}> 
                <View style={styles.cardHeader}>
                <Image
                
                source={{
                
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBuMvSuYezLE9rwI-zOJeIOmcIGfDPqOvFA&s"

                }}
                
                style={styles.profileImage}
                />
            </View>
            <Text style={styles.name}>jay shah</Text>
      <Text style={styles.email}>jayshah123@gmail.com</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Ask to Follow</Text>
      </TouchableOpacity>
            </View>




            



        </SafeAreaView>
    )
}




const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: "#f9f9f9",
    paddingHorizontal: 10,
    paddingTop: 20,
    flexDirection: 'row', // Align items in a row
    flexWrap: 'wrap', // Allow wrapping to the next line
    justifyContent: 'space-between', // Space between cards
    padding: 10,

    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e91e63",
        marginBottom: 10,
        textAlign: "center",
      },
      row: {
        justifyContent: "space-between",
      },
      card: {
        backgroundColor: "#fff",
        borderRadius: 15,
        overflow: "hidden",
        marginBottom: 15,
        width: "48%",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 3,
        paddingBottom: 10,
      },
      cardHeader: {
        backgroundColor: "#e91e63",
        alignItems: "center",
        padding: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#fff",
      },
      name: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 8,
      },
      email: {
        fontSize: 14,
        color: "#777",
        textAlign: "center",
        marginBottom: 8,
      },
      followButton: {
        backgroundColor: "#fff",
        borderColor: "#e91e63",
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: 8,
        marginHorizontal: 20,
        alignItems: "center",
      },
      followButtonText: {
        color: "#e91e63",
        fontWeight: "bold",
        
      },
      card2: {
        backgroundColor: "#fff",
        borderRadius: 15,
        overflow: "hidden",
        marginBottom: 15,
        width: "48%",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 3,
        paddingBottom: 10,
       marginRight:100,
      },
      upwordicon: {
        // alignSelf:"flex-end",
        borderRadius: 20,
        height: 20,
        width: 20,
        marginLeft: 200,
        backgroundColor: 'white',
        position: 'absolute',
        right: 20,
        top: 10,
      },
    
      facialicon: {
        borderRadius: 20,
        height: 43,
        width: 40,
        // marginLeft:20,
        // backgroundColor:"white",
        position: 'absolute',
        right: 200,
        top: 10,
        color: 'rgba(208, 12, 136, 0.88',
      },

    });

export default Random