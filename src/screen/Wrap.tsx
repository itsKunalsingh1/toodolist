import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Wrap = () => {
  return (
    <SafeAreaView style={styles.conatainer}>
      <Text style={styles.headerText}> Update Service</Text>
      <Text style={styles.selecText}>Selected Category</Text>
      <TouchableOpacity style={styles.placeholder}>
        <TextInput
          placeholder="threading"
          style={styles.placeholderText}></TextInput>
      </TouchableOpacity>
      <Text style={styles.subCategorytext}>Sub Category</Text>
      <TouchableOpacity style={styles.placehoder2}>
        <TextInput
          placeholder="Sophisticated"
          style={styles.placeholderText2}></TextInput>
      </TouchableOpacity>
      <Text style={styles.descriptiontext1}>
        Describe which kind product your are going use
      </Text>
      <Text style={styles.descriptiontext2}>
        Note:please write in simole words so our user can
      </Text>
      <Text style={styles.descriptiontext3}>relate easly</Text>
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>hello</Text>
        </View>
        <View style={styles.modalContent2}>
          <Text style={styles.modalTitle2}>100</Text>
        </View>
        </View>

<View style={styles.view}>
        <Text style={styles.subModal}>Service Type</Text>
        <TouchableOpacity style={styles.placeholde3}>
          <TextInput
            placeholder="Gold"
            style={styles.placeholderText3}></TextInput>

        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}> Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={styles.btnText2}>Delete service</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selecText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginRight: 250,
    marginTop: 10,
  },
  placeholder: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    width: '90%',
  },
  placeholderText: {
    fontSize: 16,
    color: 'bold',
    fontWeight: 'bold',
  },
  subCategorytext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginRight: 285,
    marginTop: 10,
  },
  placehoder2: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    width: '90%',
    // marginRight:100,
  },
  placeholderText2: {
    fontSize: 16,
    color: 'bold',
    fontWeight: 'bold',
  },
  descriptiontext1: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
    marginRight: 75,
  },
  descriptiontext2: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 60,
  },
  descriptiontext3: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 300,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "'#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 30,
  },
  modalContent: {
    width: 370,
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 5,
    margin: 10,
  },
  modalTitle: {
    marginRight: 250,
  },
  modalContent2: {
    width: 370,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    shadowColor: '#000',
    elevation: 5,
    margin: 10,
  },
  modalTitle2: {
    marginRight: 310,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  subModal: {
    margin: 5,
    fontSize: 16,
    color: 'gray',
   marginRight:280,
// marginBottom:120,
  },
  placeholde3: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 50,
    width: 370,
  },
  placeholderText3: {
    fontSize: 16,
    color: 'bold',
    fontWeight: 'bold',
    marginLeft:10,
  },

  btn: {
    backgroundColor: 'rgba(173, 10, 100, 0.88)',
    width: 350,
    margin: 10,
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 12,
  },
  btn2: {
    backgroundColor: 'rgba(199, 95, 77, 0.88)',
    width:350,
    margin: 10,
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    marginRight: 10,
  },
  btnText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 12,
  },
  view:{
   marginBottom:110,
    
  }
});

export default Wrap;
