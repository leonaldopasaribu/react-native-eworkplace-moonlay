import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FCFF',
  },
  viewTextContainer: {
    marginLeft: 25,
  },
  text1: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    fontWeight: '600',
    color: '#505050',
    paddingTop: 13,
  },
  textForm: {
    marginLeft: 25,
    marginTop: 20,
  },
  containerTable: {
    flex: 1, 
    flexDirection: 'row', 
    padding: 6
  },
  columnDate: {
    alignItems: 'center',
    width: 110,
    height: 50,
  },
  columnCategory: {
    alignItems: 'center',
    width: 90,
    height: 50,
  },
  columnStatus: {
    alignItems: 'center',
    width: 90,
    height: 50,
  },
  columnAction: {
    alignItems: 'center',
    width: 100,
    height: 50,
  },
  titleTable: {
    fontSize: 18,
    fontWeight: '900',
    fontFamily: 'Nunito-Bold',
  },
  textTable: {
    padding: 10, 
    fontFamily: 'Nunito-Bold'
  },
  textApproved: {
    padding: 8, 
    fontFamily: 'Nunito-Bold',
    color: 'green',
  },
  textRejected: {
    padding: 8, 
    fontFamily: 'Nunito-Bold',
    color: 'red',
  },
  textPending: {
    padding: 8, 
    fontFamily: 'Nunito-Bold', 
    color: '#187bcd'
  },
  viewPicker: {
    marginLeft: 25,
    paddingLeft:10,
    marginTop: 10,
    height: 50,
    width: '90%',
    borderRadius: 50,
    borderColor: '#505050',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  viewPickerDate: {
    marginLeft: 26,
    paddingLeft:10,
    marginTop: 10,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    height: 50,
    width: '40%',
    borderRadius: 50,
    borderColor: '#505050',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  picker: {
    height: '100%',
    width: '100%',
    borderWidth: 20,
    borderColor: '#505050',
  },
  dataTable: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonRequest: {
    marginTop: 40,
    marginBottom:50,
    backgroundColor: '#28A745',
    height: 50,
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  textbtnRequest: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
    fontFamily: 'Nunito-SemiBold',
    marginBottom: 7,
  },
});
