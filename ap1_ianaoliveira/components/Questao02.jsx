import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function Questao02() {

    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [resultado, setResultado] = useState('')

    const soma = () => setResultado(Number(n1)+Number(n2))
    const sub = () => setResultado(Number(n1)-Number(n2))
    const mult = () => setResultado(Number(n1)*Number(n2))
    const div = () => setResultado(Number(n1)/Number(n2))

    return(
        <View>
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder='Número 1'
                onChangeText={(n1) => setN1(n1)}/>
                <TextInput
                style={styles.input}
                placeholder='Número 2'
                onChangeText={(n2) => setN2(n2)}/>
            </View>
            <View style={styles.botoes}>
                <Button onPress={soma} title='+'/>
                <Button onPress={sub} title='-'/>
                <Button onPress={mult} title='*'/>
                <Button onPress={div} title='/'/>
            </View>
            <Text> Resultado: {resultado} </Text>
            
        </View>
    )
}

const styles = StyleSheet.create (
    {
        container: {
            flex:1, 
            flexDirection: 'row', 

        }, input: {
            margin: 5,
            height:45, 
            width:'95%',
            borderColor: 'gray', 
            borderWidth: 2, 
            paddingLeft:20,
            marginTop:10
        }, botoes: {
            flexDirection: 'row', 
            justifyContent: 'space-evenly'
        }
    }
)
