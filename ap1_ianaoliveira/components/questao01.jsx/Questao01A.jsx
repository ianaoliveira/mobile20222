import { Text, View } from 'react-native'

export default function Questao01A ({nome, sobrenome, curso}) {

    return (
        <View>
            <Text>
                Nome: {nome}
            </Text>
            <Text>
                Sobrenome: {sobrenome}
            </Text>
            <Text>
                Curso: {curso}
            </Text>
        </View>
    )

}