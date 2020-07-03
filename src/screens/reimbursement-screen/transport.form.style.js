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
      text1:{
        fontSize:16, fontWeight:'300', fontFamily:'Nunito', marginLeft:22, marginTop:10
      },
      TextDate:{
        fontWeight:'300', fontFamily:'Nunito-Light',marginLeft:22, marginBottom:3
      },
      viewPicker:{
        width:'90%', flex:1.5, borderRadius:5, borderColor:'#505050', borderWidth:1, backgroundColor:'white', alignSelf:'center'
      },
      picker:{
        height: '100%', width: '100%', borderWidth:20, borderColor:'#505050'
      },
       Split:{
         flex: 0.3,
         flexDirection: 'row',
         marginTop: 16,
       },
       inputText:{
        textAlignVertical: 'top', borderWidth: 1, borderRadius:5, width:'90%', height:'9%',backgroundColor:'white', fontSize:18, borderColor:'#505050', alignSelf:'center', paddingLeft:10, paddingRight:10
      },
      buttonSubmit:{
        marginTop:40, backgroundColor:'#1A446D', height:50, width:'90%', borderRadius:5, alignSelf:'center'
      },
      textbtnSubmit:{
        color:'white', fontSize: 20, fontWeight:'600', textAlign:'center',textAlignVertical: "center", flex:1, fontFamily:'Nunito-SemiBold', marginBottom:7 
      },
      viewDate1:{
        flex:1,
      },
      viewDate2:{
        flexDirection:'row',flex:1, marginLeft:22, width:'80%',
      },
      viewDate22:{
        flexDirection:'row',flex:1, marginLeft:18, width:'80%',
      },
      viewDate3:{
        height:'100%', width:'100%', borderColor:'#505050', borderWidth:1, borderRadius:5, flexDirection:'row', backgroundColor:'#FFFFFF'
      },
      textinputDate:{
        height:'100%', borderWidth: 1, backgroundColor:'white',borderRadius:5, fontSize:18
      },
      iconDate:{
        alignSelf:'flex-end', marginRight:7, marginBottom:10, marginTop:8
      }
});