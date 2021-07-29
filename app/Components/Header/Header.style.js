const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: 'source-sans',
    color: "#747474"
  },
  button: (color) => ({
    minHeight: 30,
    minWidth: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color ? color : '#1b83e3',
    padding: 10,
  }),
  buttonText: {
    textAlign: 'center',
    color: '#f0f0f0',
    fontWeight: 'bold'
  },
  containerFlex: (last, flex) => ({
    flex,
    marginRight: last ? 0 : 10
  }),
  textBody: {
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 20
  }
};

export default styles;
