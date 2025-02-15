import {useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.htext}>Today work</Text>
      <Text style={styles.ordertext}>Order ID - 743125ab</Text>

      {/* user card */}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfWEZNNxRah915hTz--1KsiIbMLPe4E0z3GQ&s',
          }}
          style={styles.profileimage}
        />
        <View>
          <Text style={styles.name}> jay shah</Text>
          <Text style={styles.email}>kunal@gmail.com</Text>
          <Text style={styles.phone}>9876543210</Text>
          <Text style={styles.details2}>
            Clasic facial, <Text style={styles.detail}> +7</Text>
            <Text style={styles.details2}> $100</Text>{' '}
          </Text>
        </View>
      </View>

      {/* subscription modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBacground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Congratulation</Text>
            <Text style={styles.modalText}>
              Now you have a subscription of 1 years..
            </Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntext}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: 'red',
    borderWidth: 1,
  },
  profileimage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginRight: 15,
    borderColor: 'red',
    borderWidth: 2,
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 50,
  },
  name: {fontSize: 18, fontWeight: 'bold'},
  email: {color: 'gray'},
  phone: {color: 'gray'},
  details2: {fontWeight: 'bold'},
  detail: {marginTop: 5, fontWeight: 'bold', color: 'red', fontSize: 18},
  // modal style
  modalBacground: {
    flex: 1,
    backgroundColor: "'#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: 370,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 5,

    //  marginTop:150,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a2003b',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'gray',
  },
  button: {
    backgroundColor: '#e91e63',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#ff9ba9',
    width: '50%',
    borderRadius: 10,
    padding: 6,
    borderColor: 'brown',
    borderWidth: 1,
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 50,
  },
  btntext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  htext: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 3,
    marginTop: 20,
    marginBottom: 40,
  },
  ordertext: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginTop:10,
    marginLeft: 3,
    marginBottom: 20,
  },
});

export default Home;
