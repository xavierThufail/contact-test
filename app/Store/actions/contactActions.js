import axios from 'axios';

const url = 'https://simple-contact-crud.herokuapp.com/contact';

const setContacts = (contacts) => {
  return {
    type: 'SET_CONTACTS',
    payload: contacts
  };
};

const setStatus = (payload) => {
  return {
    type: 'SET_STATUS',
    payload
  }
}

const setIdCard = (id) => {
  return {
    type: 'SET_ID_CARD',
    payload: id
  }
}

const setLoading = (loading) => {
  return {
    type: 'SET_LOADING',
    payload: loading
  };
};

const setError = (err) => {
  return {
    type: 'SET_ERROR',
    payload: err
  };
};

const getContact = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios({
      method: 'GET',
      url
    })
      .then(({ data }) => {
        dispatch(setContacts(data.data));
      })
      .catch(err => {
        dispatch(setError(err.response.data.message));
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
  };
};

const postContact = (data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios({
      method: 'POST',
      url,
      data
    })
      .then(({data}) => {
        dispatch(setStatus(data.message))
        dispatch(getContact());
      })
      .catch(err => {
        dispatch(setStatus(err.response.data.message))
        dispatch(setError(err.response.data.message));
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
  };
};

const editContact = (id, data) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios({
      method: 'PUT',
      url: `${url}/${id}`,
      data
    })
      .then(({data}) => {
        dispatch(setStatus(data.message))
        dispatch(getContact());
      })
      .catch(err => {
        dispatch(setStatus(err.response.data.message))
        dispatch(setError(err.response.data.message));
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
  };
};

const deleteContact = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios({
      method: 'DELETE',
      url: `${url}/${id}`
    })
      .then(({ data }) => {
        dispatch(getContact());
        dispatch(setStatus(data.message))
      })
      .catch(err => {
        console.log({ err })
        dispatch(setStatus(err.response.data.message))
        dispatch(setError(err.response.data.message));
      })
      .finally(_ => {
        dispatch(setLoading(false));
      });
  };
};


export default {
  getContact,
  postContact,
  editContact,
  deleteContact,
  setStatus,
  setIdCard
}