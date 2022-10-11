import { View, Text, FlatList } from 'react-native'

export default function Questao01B () {

    const discs = [
        
            {title: 'Design e Inovação'}, 
            {title: 'Projeto Integrado IV'}, 
            {title: 'Concepção e Desenvolvimento de Produtos'}


    ]
    
    return (
        <View>
            <FlatList
            data = {discs}
            renderItem={
                ({item}) => {
                    return (
                        <View>
                            <Text>
                                Disciplina: {item.title}
                            </Text>
                        </View>
                    )
                }
            }
            />
        </View>
        
    )
}