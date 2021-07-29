import React from 'react';

import ContactComponent from './Contact.component';
import useContact from './Contact.hook';
import config from './Contact.config';

const ContactContainer = (props) => {
  const hooks = useContact(props);

  return <ContactComponent {...hooks} />
};

ContactContainer.propTypes = config.container.propTypes;
ContactContainer.displayName = config.container.displayName;

export default ContactContainer;
