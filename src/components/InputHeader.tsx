import React , {useEffect, useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { BORDERRADIUS, COLOR, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';



const InputHeader = (props: any) => {

    const [searchText,  onChangeText] = useState<string>("")


  return (
    <View style={styles.inputBox}>
      <TextInput style={styles.textinput} 
        value={searchText}
        placeholder='Search Your Movies...'
        onChangeText={TextInput => onChangeText(TextInput)}
        placeholderTextColor={COLOR.WhiteRGBA32}
      />
      <TouchableOpacity style={styles.searchIcon} onPress={() => props.searchFunction(searchText)}>
      <FontAwesome 
          name="search" 
          size={FONTSIZE.size_20} 
          color={COLOR.Orange} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputHeader;

const styles = StyleSheet.create({
  inputBox: {
    display: "flex",
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
    borderWidth: 2,
    borderColor: COLOR.WhiteRGBA15,
    borderRadius: BORDERRADIUS.radius_25,
    flexDirection: "row"
  },
  textinput: {
    width: '90%',
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color:COLOR.White
  },
  searchIcon: {
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING.space_10
  }
});
