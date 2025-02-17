import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLOR, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';


const CategoryHeader = (props: any) => {
  return (
      <Text style={styles.text}>{props.title}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLOR.White,
    paddingHorizontal: SPACING.space_36,
    paddingVertical: SPACING.space_28
  }
});

export default CategoryHeader;
