import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Forms, { IconButton, Modal } from '../Form';
import { Contacts } from '../Contacts';
import Filter from '../Filter';
import { MainPage, Button, Title, Title2, Header } from '../styles/App.styles';

import TotalContacts from '../TotalContacts/TotalContacts';

import { operations } from '../../redux/contacts/index';

export const ContactsSection = () => {
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
      <ToastContainer />
    </MainPage>
  );
};
