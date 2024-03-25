import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ResultImc from './resultImc'

export default function Form() {
  const [height, setHeight] = useState(null);
  const [Weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [menssageImc, setMenssageImc] = useState("Preencha o peso e a altura");
  const [textButton, setTextButton] = useState("Calcule IMC");

  function imcCalculator(){
    return setImc((Weight / (height * height)).toFixed(2))
  }

  function validationImc() {
    if (weight != null && height != null){
      imcCalculator();
      keyboard.dismiss();
      setHeight(null);
      setWeight(null);
      setMenssageImc("Seu IMC é:");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setMenssageImc("Preencha o pesso e altura");
    setTextButton("Calcular IMC")
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          onchangetext = {setHeight}
          value={height ?? ""}
          placeholder='Ex. 1.70'
          keyboardType='numeric'
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onchangetext = {setweight}
          value={weight ?? ""}
          placeholder='Ex. 80.345'
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.button} onPress={() => validationImc()}
        >
          <Text style={styles.textButton}>
            Calcular IMC  </Text>
        </TouchableOpacity>
      </View>
      <ResultImc menssageResult={menssageImc} ResultImc={imc} />
    </View>
  )
}