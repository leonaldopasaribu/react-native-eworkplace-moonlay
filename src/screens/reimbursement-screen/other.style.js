import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F9FCFF',
    },
    viewTextContainer:{
        marginLeft: 25,
    },
    text1: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        fontWeight: '600',
        color: '#505050',
        paddingTop: 13,
    },
    textForm:{
        marginLeft:25, marginTop: 20
    },
    titleTable:{
        fontSize: 18,
        fontWeight: '900',
        fontFamily: 'Nunito-Bold',
    },
    textApproved:{
        color: 'green',
    },
    textRejected:{
        color: 'red',
    },
    viewPicker: {
        marginLeft: 25, 
        marginTop: 10,
         padding: 5, 
         height: '6%', 
         width: '90%', 
         borderRadius:5, 
         borderColor:'#505050', 
         borderWidth:1, 
         backgroundColor:'white'
    },
    viewPickerDate: {
        marginRight: 16, 
        marginTop: 10, 
        padding: 5,
        alignSelf: 'flex-end',
        alignItems: 'flex-end', 
        height: '6%', 
        width: '40%',
        borderRadius:5, 
        borderColor:'#505050', 
        borderWidth:1, 
        backgroundColor:'white'
    },
    picker:{
        height: '100%', width: '100%', borderWidth:20, borderColor:'#505050',
      },
    dataTable:{
        width: '90%',
        alignSelf: 'center',
        marginTop:30,
    },
    buttonRequest: {
        marginTop: 40, backgroundColor: '#28A745', height: 50, width: '90%', borderRadius: 5, alignSelf: 'center'
    },
    textbtnRequest: {
        color: 'white', fontSize: 20, fontWeight: '600', textAlign: 'center', textAlignVertical: "center", flex: 1, fontFamily: 'Nunito-SemiBold', marginBottom: 7
    },
});