import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

export default function Questao04 () {

    const [resultado, setResultado] = useState('');

    useEffect(() => {
    
        fetch(`https://restcountries.com/v2/region/africa?fields=name,population`)
          .then((response) => response.json())
          .then((data) => {
            let maior = data[0]
            data.forEach(pais => {
                if (pais.population > maior.population){
                    maior = pais
                }
            });

            setResultado(maior)

          })
          .catch((error)=>{console.log(error)})
      }, []);


    return(
        <View>
            <Text>
                O país mais populoso é: {resultado.name}
            </Text>
        </View>
    )
}