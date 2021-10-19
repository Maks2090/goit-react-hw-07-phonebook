import './App.css';
import ContactForm from './components/ContactFotm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';






export default function App(){

  return (
    <div>
      <h1 className="title"> Phonebook</h1>

      <ContactForm/>

      <h2 className="title">Contacts</h2>

      <Filter/>

      <ContactList/>
     
    </div>
  )
}


