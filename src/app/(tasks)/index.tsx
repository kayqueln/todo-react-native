import { StyleSheet } from 'react-native';



import { PrimaryButton } from '@/src/components/StyledButton';
import { PrimaryInput } from '@/src/components/StyledTextInput';
import { View } from '@/src/components/Themed';
import { useState } from 'react';

export default function TasksScreen() {
  const [value, onChangeText] = useState('Useless Multiline Placeholder');

  return (
    <View style={styles.container}>
      <View style={styles.newTaskContainer}>
        <PrimaryInput placeholder='e.g. Dar comida pro gato' style={{ flex: 1 }} />
        <PrimaryButton onPress={() => { }} title={'Criar'} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },

  newTaskContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },



  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
