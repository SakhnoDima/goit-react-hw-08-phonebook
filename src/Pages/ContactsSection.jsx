import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import Forms, { IconButton, Modal } from '../components/Form';
import { Contacts } from '../components/Contacts';
import Filter from '../components/Filter';
import {
  MainPage,
  Button,
  Title,
  Title2,
  Header,
} from '../components/styles/App.styles';

import TotalContacts from '../components/TotalContacts/TotalContacts';
import { operations } from '../redux/contacts/index';

const ContactsSection = () => {
  const [showModal, setModalShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const modalToggle = () => {
    setModalShow(prev => !prev);
  };
  return (
    <MainPage>
      <Header>
        <TotalContacts />
      </Header>
      <Title style={{ textAlign: 'center' }}>Phonebook</Title>
      <Forms />

      <Button type="button" onClick={modalToggle}>
        All Cntacts
      </Button>
      {showModal && (
        <Modal onCloses={modalToggle}>
          <>
            <IconButton onClick={modalToggle}>
              <AiOutlineCloseCircle />
            </IconButton>
            <Title2 style={{ textAlign: 'center' }}>Contacts</Title2>
            <Filter />
            <Contacts />
          </>
        </Modal>
      )}
    </MainPage>
  );
};

export default ContactsSection;
