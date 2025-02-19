import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

const Tab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Socialize your work</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.headerButton}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1827/1827392.png',
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2838/2838779.png',
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077063.png',
              }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.galleryText}>Your Make gallery</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
            }}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/15077/15077415.png',
            }}
            style={styles.imageicon}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/15077/15077415.png',
            }}
            style={styles.imageicon}
          />
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/15077/15077415.png',
            }}
            style={styles.imageicon}
          />
        </View>

        <Text style={styles.uploadtext}>
          Upload Your Branding images To show Your locality
        </Text>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/15077/15077415.png',
            }}
            style={styles.imageicon}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/15077/15077415.png',
            }}
            style={styles.imageicon}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg',
            }}
            style={styles.profileImage}
          />
        </View>
        

        <Text style={styles.nouploading}>
          Currently no one have uploaded their Branding images.
        </Text>
        <TouchableOpacity style={styles.addbtn}>
          <Text style={styles.addbtnText}>Add your service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cusmatic}>
          <Text style={styles.cusmaticText}>Facial & Clean Up</Text>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/8495/8495922.png',
            }}
            style={styles.facialicon}
          />
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2609/2609205.png',
            }}
            style={styles.upwordicon}
          />
        </TouchableOpacity>
      

        <TouchableOpacity> 
            <Text style={styles.homeText}>home</Text>
            <Image
            source={{

                uri:"https://cdn-icons-png.flaticon.com/128/25/25694.png"
            }}
            
            style={styles.Homeicon}
            />
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // padding:5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'white',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    marginTop: 20,
    height: 60,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(173, 10, 100, 0.88)',
    marginLeft: 15,
  },
  headerButtons: {flexDirection: 'row'},
  headerButton: {
    padding: 5,
    // backgroundColor: "pink",
    borderRadius: 15,
  },
  icon: {
    width: 30,
    height: 30,
    margin: 7,
  },
  galleryText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
    color: '#000',
    marginLeft: 15,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row', // Align items in a row
    flexWrap: 'wrap', // Allow wrapping to the next line
    justifyContent: 'space-between', // Space between cards
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    width: '30%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 5,
    elevation: 3,
    paddingBottom: 10,
    height: '15%',
    // margin:5,
  },
  profileImage: {
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    width: 140,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 5,
    elevation: 3,
    paddingBottom: 10,
    height: 199,
    margin: 5,
  },
  imageicon: {
    height: 50,
    width: 50,
    // alignItems:"center",
    // justifyContent:"center",
    marginLeft: 30,
    marginTop: 25,
  },
  uploadtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'bold',
    // padding:10,
    marginBottom: 10,
  },
  nouploading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'hsla(139, 86.70%, 44.30%, 0.88)',
  },
  addbtn: {
    backgroundColor: 'rgba(173, 10, 100, 0.88)',
    borderRadius: 10,
    elevation: 3,
    marginTop: 30,
    height: 50,
    width: '100%',
  },
  addbtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 12,
  },
  cusmatic: {
    backgroundColor: 'rgba(173, 10, 100, 0.88)',
    borderRadius: 10,
    elevation: 3,
    marginTop: 30,
    height: 60,
    width: '100%',
  },
  cusmaticText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
    marginHorizontal: 20,
  },
  upwordicon: {
    // alignSelf:"flex-end",
    borderRadius: 20,
    height: 20,
    width: 20,
    marginLeft: 200,
    backgroundColor: 'white',
    position: 'absolute',
    right: 30,
    top: 15,
  },

  facialicon: {
    borderRadius: 20,
    height: 43,
    width: 40,
    // marginLeft:20,
    // backgroundColor:"white",
    position: 'absolute',
    right: 200,
    top: 8,
    color: 'rgba(208, 12, 136, 0.88',
  },
  Homeicon:{
    width:30,
    height:30,
    marginTop:20,
    marginLeft:20,
  },
  homeText:{
    fontSize:14,
    fontWeight:"bold",
    color:"gray",
    position:"absolute",
    top:2
  }

});
export default Tab;
