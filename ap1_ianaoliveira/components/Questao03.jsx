import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

export default function Questao03 () {

    const [lista, setLista] = useState([])
    const [offset, setOffset] = useState(0);

    const mudarOff = () => setOffset(offset + 10);

    useEffect(() => {
    
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
          .then((response) => response.json())
          .then((data) => {
            setLista(data.results);
          })
          .catch((error)=>{console.log(error)})
      }, [offset]);


    return(
        <View>
          <FlatList
            data={lista}
            renderItem={({ item }) => <Text> - {item.name}</Text>}
            keyExtractor={(item, index) => index}
          />
          <Button title="Próximos 10" onPress={mudarOff} />
        </View>
    )
}