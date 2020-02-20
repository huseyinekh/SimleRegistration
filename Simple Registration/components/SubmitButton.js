import React from 'react'
import {Text,StyleSheet,TouchableOpacity}from 'react-native'
import Color from '../constants/Color'


const SubmitButton= props=>{
    return(
        <TouchableOpacity style={{...styles.button,...props.style}}  {...props}>
           <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    button:{
        width:100,
        height:30
    },
    title:{
        color:Color.white,
        fontSize:23,
        fontFamily:'Sriracha',
        fontWeight:'900',
        borderBottomColor:Color.white,
        borderBottomWidth:1,
        borderBottomColor:Color.gray,
        paddingVertical:4,
        borderTopWidth:1,
        borderTopColor:Color.gray,
      
        textAlign:'center'
    }
})


export default SubmitButton