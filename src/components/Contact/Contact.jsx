import React from 'react';
import { selectors, operations } from 'redux/contacts/index';
import { RiContactsBook2Fill, RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Item } from './Contact.styles';
import { KEY_LS } from 'components/helpers/themtoggle';
import { toast } from 'react-toastify';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.getLoadState);
  const theme = localStorage.getItem(KEY_LS);

  const handleClick = () => {
    dispatch(operations.deleteContact(id));
    toast.success(`${name} was deleted from your contacts`, {
      autoClose: 2000,
      theme: `${theme === 'theme-dark' ? 'dark' : 'light'}`,
    });
  };

  return (
    <>
      <Item>
        <RiContactsBook2Fill />
        {name} : {number}
        <Button disabled={loading} onClick={() => handleClick()}>
          <RiDeleteBin5Line />
        </Button>
      </Item>
    </>
  );
};

export default Contact;
