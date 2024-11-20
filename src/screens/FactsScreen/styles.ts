import {StyleSheet} from 'react-native';

const styles = (top: number, bottom: number) =>
  StyleSheet.create({
    root: {
      flex: 1,
    },
    header: {
      height: 120 + top,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: '500',
      color: 'white',
      opacity: 0.8,
    },
    loader: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'black',
      opacity: 0.3,
    },
    btnWrapper: {
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginTop: 16,
      marginBottom: 24,
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
    btnText: {
      color: 'white',
      opacity: 0.85,
      fontWeight: '500',
    },
    flatList: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: bottom + 24,
    },
    itemOuter: {
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
      minHeight: 40,
    },
    itemInner: {
      borderRadius: 8,
      width: '95%',
      marginVertical: 8,
      backgroundColor: 'white',
      padding: 16,
    },
    errroText: {
      color: 'red',
      textAlign: 'center',
    },
    errorLabel: {
      fontSize: 10,
      textAlign: 'center',
      lineHeight: 14,
    },
  });

export default styles;
