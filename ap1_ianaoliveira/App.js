import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Questao01 from './components/questao01.jsx/Questao01';

import Questao01A from './components/questao01.jsx/Questao01A';
import Questao01B from './components/questao01.jsx/Questao01B';
import Questao02 from './components/Questao02';
import Questao03 from './components/Questao03';
import Questao04 from './components/Questao04';
import Questao05 from './components/Questao05';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}> Questão 01 </Text>
      <Questao01>
        <Questao01A nome='Iana' sobrenome='Oliveira' curso='Design Digital'/>
        <Questao01B/>
      </Questao01>

      <Text style={{fontSize: 20, fontWeight: 'bold'}}> Questão 02 </Text>
      <Questao02/>

      <Text style={{fontSize: 20, fontWeight: 'bold'}}> Questão 03 </Text>
      <Questao03/>

      <Text style={{fontSize: 20, fontWeight: 'bold'}}> Questão 04 </Text>
      <Questao04/>

      <Text style={{fontSize: 20, fontWeight: 'bold'}}> Questão 05 </Text>
      <Questao05/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 30
  },
});
