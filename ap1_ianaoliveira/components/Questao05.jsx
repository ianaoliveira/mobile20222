import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

export default function Questao05 () {

    const [resultado, setResultado] = useState('');
    const [continente, setContinente] = useState('africa');

    useEffect(() => {
    
        fetch(`https://restcountries.com/v2/region/${continente}?fields=name,population`)
          .then((response) => response.json())
          .then((data) => {
            let aux = data[0]
            data.forEach(pais => {
                if (pais.population > aux.population && continente != 'asia'){
                    aux = pais
                } 
                if (pais.population < aux.population && continente == 'asia') {
                    aux = pais
                }
            });

            setResultado(aux)

          })
          .catch((error)=>{console.log(error)})
      }, [continente]);


    return(
        <View>
            <Text>
                O resultado é: {resultado.name}
            </Text>
            <Button title="americas"
            onPress={() => setContinente('americas')}/>
            <Button title="asia"
             onPress={() => setContinente('asia')}/>
        </View>
    )
}