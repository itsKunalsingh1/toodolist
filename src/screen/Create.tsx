import {useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Create = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.htext}>Today's work</Text>
      <Text style={styles.ordertext}>Order ID-743125AB</Text>
      <View style={styles.profilecard}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuVeLUeTvBaLoN1NEAZoYTapcr0oIr5K3noWhILPZaYp-H94TBH7hsU01&s',
          }}
          style={styles.profileimages}
        />
        <View>
          <Text style={styles.name}> jay shah</Text>
          <Text style={styles.email}>kunal@gmail.com</Text>
          <Text style={styles.phone}>9876543210</Text>
          <Text style={styles.details2}>
            Clasic facial, <Text style={styles.detail}> +7</Text>
            <Text style={styles.details2}> $100</Text>
          </Text>
        </View>
      </View>
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              {' '}
              Thank you for choosing Shringar
            </Text>
            <Image
              source={{
                uri: 'https://angrycreative.com/wp-content/uploads/sites/3/2022/09/feat-cro-1024x614.png',
              }}
              style={styles.modalimage}
            />
            <Text style={styles.subscriptionText}>
              Hi buddy you are eligible for 1 year of free subscription
            </Text>
            <Text style={styles.coupText}>
              Copy Coupan Code "SHRINGAR@500000"
            </Text>
            <TextInput placeholder="coupon code" style={styles.placeholder2}>
              <Text style={styles.enterText}> coupon code </Text>
            </TextInput>
            <TouchableOpacity style={styles.btnn}>
              <Text style={styles.textbtn}>submit</Text>
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
    alignItems:"center",
    justifyContent:"center",
  },
  htext: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
  },
  ordertext: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
    margin: 20,
  },
  profilecard: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderColor: 'red',
    borderWidth: 1,
    margin: 20,
  },
  profileimages: {
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
    padding: 15,
  },
  name: {fontSize: 18, fontWeight: 'bold'},
  email: {color: 'gray'},
  phone: {color: 'gray'},
  details2: {fontWeight: 'bold'},
  detail: {marginTop: 5, fontWeight: 'bold', color: 'red', fontSize: 18},
  modalBackground: {
    flex: 1,
    backgroundColor: "'#fff",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
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
    marginTop: 100,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a2003b',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    color: '#c03b6e',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#e91e63',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
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
    elevation: 5,
    marginTop: 15,
  },
  btntext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalimage: {
    height: 100,
    width: 100,
    alignItems: 'center',
    marginTop: 10,
    padding: 20,
  },
  subscriptionText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  coupText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    color: '#c03b6e',
    fontWeight: 'bold',
  },
  placeholder2: {
    backgroundColor: 'white',
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 5,
    width: '98%',
    borderRadius: 20,
    textAlign: 'center',
  },
  enterText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
    // fontWeight:"bold",
  },
  btnn: {
    backgroundColor: '#c03b6e',
    width: '50%',
    borderRadius: 20,
    padding: 8,
    borderColor: 'brown',
    borderWidth: 1,
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 5,
    marginTop: 15,
  },
  textbtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Create;
