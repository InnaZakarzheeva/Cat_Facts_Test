import { StyleSheet } from "react-native";

const styles = (top: number, bottom: number) => StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    height: 120 + top,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    opacity: 0.7,
    marginTop: 16,
    marginBottom: 24,
  },
  backBtn: {
    position: 'absolute',
    left: 16,
    top: top + 16,
  },
  backText: {
    fontSize: 14,
    color: 'white',
    textDecorationLine: 'underline',
  },
  contentWrapper: {
    paddingHorizontal: 16,
    marginTop: 8,
    paddingBottom: 24 + bottom,
  },
  titleSection: {
    color: '#159957',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 16,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default styles;