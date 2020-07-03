import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container2:{
        flex: 1,
        backgroundColor:'#F9FCFF',
      },
      textareaContainer: {fontSize:20, marginLeft:21, fontWeight:'600', fontFamily:'Nunito-SemiBold', color:'#505050', paddingTop:10},
       textSM:{
        marginTop: 16,
        marginBottom:10,
        paddingLeft:20,
        fontSize:16,
        fontWeight:'300', fontFamily:'Nunito-Light'
      },
      card: {
        width: '90%',
        marginBottom:10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 7,
    },
    viewText:{
        paddingBottom:20,
    },
    textTitle:{
        textTransform: "uppercase",
        fontSize: 16,
        paddingTop: 20,
    },  
    textDetail: {
        
    }
});