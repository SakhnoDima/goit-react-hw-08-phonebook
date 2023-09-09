import React from 'react';
import { selectors, operations } from 'redux/contacts/index';
import { RiContactsBook2Fill, RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Item } from './Contact.styles';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.getLoadState);
  return (
    <>
      <Item>
        <RiContactsBook2Fill />
        {name} : {number}
        <Button
          disabled={loading}
          onClick={() => dispatch(operations.deleteContact(id))}
        >
          <RiDeleteBin5Line />
        </Button>
      </Item>
    </>
  );
};

export default Contact;
