import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Color from '../constants/Color'


const Cart = () => {
    return (
        <View style={styles.cart}>
             
        </View>
    )
}
const styles= StyleSheet.create({
    cart:{
          width:'80%',
          height:300,
          backgroundColor:Color.white
    }
})
export default Cart
