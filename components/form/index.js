import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";


export default function Form() {
    const [calculo, setCalculo] = useState(null)

    const [nota1, setNota1] = useState(null)
    const [nota2, setNota2] = useState(null)
    const [nota3, setNota3] = useState(null)
    const [nota4, setNota4] = useState(null)

    const [textButton, setTextButton] = useState("Calcular Média")

    function calculoMedia() {
        const mediaCalculada = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
        setCalculo(mediaCalculada.toFixed(2));
    }

    function validadeDados() {
        if (nota1 != null) {
            calculoMedia()
            setTextButton("Calcular Novamente")
            return
        }
        setCalculo("PREENCHA OS DADOS APENAS COM NUMERAIS")
    }

    return (
        <View style={styles.asaa}>
            <Text style={styles.textH1}>Calculo de Média</Text>
            <TextInput placeholder="EX.: 2" style={styles.input} value={nota1} onChangeText={setNota1} />
            <TextInput placeholder="EX.: 4" style={styles.input} value={nota2} onChangeText={setNota2} />
            <TextInput placeholder="EX.: 6" style={styles.input} value={nota3} onChangeText={setNota3} />
            <TextInput placeholder="EX.: 8" style={styles.input} value={nota4} onChangeText={setNota4} />

            <TouchableOpacity style={styles.buttonSend} onPress={() => { validadeDados() }}>
                <Text style={styles.textButton}>{textButton}</Text>
            </TouchableOpacity>

            <Text style={styles.textResul}>Média: {calculo}</Text>
        </View >
    )
}


const styles = StyleSheet.create({
    asaa: {
        display: "flex",
        justifyContent: 'center'
    },

    textH1: {
        fontSize: 20,
        color: 'white'
    },

    textResul: {
        color: 'white'
    },

    input: {
        border: '1px solid #fff',
        padding: 5,
        margin: 10,
        backgroundColor: '#fff'
    },

    textButton: {
        color: 'white'
    },

    buttonSend: {
        backgroundColor: 'rgb(33, 150, 243)',
        width: 150,
        height: 30,
        display: 'flex',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
})