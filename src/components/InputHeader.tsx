import React , {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLOR, SPACING } from '../theme/theme';


const InputHeader = () => {
    const [searchText,  onChangeText] = useState<string>("")
  return (
    <View style={styles.inputBox}>
    </View>
  );
};

export default InputHeader;

const styles = StyleSheet.create({
  inputBox: {
    display: "flex",
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
    
  }
});
