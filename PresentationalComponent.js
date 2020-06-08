import React, { Component } from 'react'
import { Text, View , StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
   return (
      <View>
         {/*<Text style = {styles.myStyle} onPress = {props.updateState}>
            {props.myState}
        </Text>*/}

        <View style = {styles.container}>
         <View style = {styles.redbox} />
         <View style = {styles.bluebox} />
         <View style = {styles.blackbox} />
        </View>
         
      </View>


   )
}
export default PresentationalComponent

const styles = StyleSheet.create ({
   myStyle: {
      marginTop: 20,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20
   },
   container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'grey',
      height: 600
   },
   redbox: {
      width: 100,
      height: 100,
      backgroundColor: 'red'
   },
   bluebox: {
      width: 100,
      height: 100,
      backgroundColor: 'blue'
   },
   blackbox: {
      width: 100,
      height: 100,
      backgroundColor: 'black'
   },
})