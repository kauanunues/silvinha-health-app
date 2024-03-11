import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ResultImc() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Mensagem
        </Text>
      <Text style={styles.textImc}>
        IMC
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: -150
    },
    text: {
        fontSize : 18,
        color: "#FF0043",
        fontWeight: 'bold'
    },
    textImc: {
        fontSize: 48,
        color: '#FF0043',
        fontWeight: 'bold'
    }
})