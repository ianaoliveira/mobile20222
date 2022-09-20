import { useState } from 'react';
import { View, Text, Button } from 'react-native'

const VotaCidades = () => {
    const [votosQuixada, setVotosQuixada] = useState(0);
    const [votosQuixeramobim, setVotosQuixeramobim] = useState(0);
    const [votosIbicuitinga, setVotosIbicuitinga] = useState(0);
    const [maioral, setMaioral]  = useState("");

    const maisVotada = () => {
        if (votosQuixada >= votosIbicuitinga && votosQuixada >= votosQuixeramobim) {
            setMaioral("Quixada")
        } else if (votosIbicuitinga > votosQuixeramobim) {
            setMaioral("Ibicuitinga")
        } else {
            setMaioral("Quixeramobim")
        } 
    }

    return (
    <View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Quixadá: {votosQuixada}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Quixeramobim: {votosQuixeramobim}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Ibicuitinga: {votosIbicuitinga}</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>A maioral: {maioral}</Text>
            </View>
            <View
                style={{
                    flex:1,
                    flexDirection:'row'
                }}
            >
                <View style={{margin:5}}>
                    <Button title='Quixadá'
                    onPress={() => setVotosQuixada(votosQuixada + 1)}
                    /> 
                </View>
                <View style={{margin:5}}>
                    <Button title='Quixeramobim'
                    onPress={() => setVotosQuixeramobim(votosQuixeramobim + 1)}
                    />
                </View>
                <View style={{margin:5}}>
                    <Button title='Ibicuitinga'
                    onPress={() => setVotosIbicuitinga(votosIbicuitinga + 1)}
                    />
                </View>
                <View style={{margin:5}}>
                    <Button title='Mais votado'
                    onPress={() => maisVotada(setMaioral)}
                    />
                </View>
            </View>
        </View>
    )
}
export default VotaCidades