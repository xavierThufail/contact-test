const styles = {
  container: { 
    elevation: 10,
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    paddingRight: 20,
    zIndex: 1
  },
  containerImage: {
    height: 50,
    width: 50,
    borderRadius:30,
  },
  contentContainer: (display) => ({
    backgroundColor: '#f0f0f0',
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
    maxHeight: 350,
    marginTop: -50,
    display
  }),
  row: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  textSubject: {
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 18,
    color: "black",
    fontWeight: 'bold'
  },
  buttonText: {
    textAlign: 'center',
    color: '#f0f0f0',
    fontWeight: 'bold'
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
  input: {
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 20
  },
  containerFlex: (last) => ({
    flex: 1,
    marginRight: last ? 0 : 10
  }),
  textBody: {
    fontWeight: 'bold'
  }
};

export default styles;
