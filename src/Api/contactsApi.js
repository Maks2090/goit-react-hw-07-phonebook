import axios from "axios";

axios.defaults.baseURL = 'https://616e9943715a630017b396ce.mockapi.io/';



export async function fetchContacts() {
    const { data } = await axios.get("/contacts");
    return data;
}



export async function saveContact(value) {
    const { data } = await axios.post("/contacts", {
      id: value.id,
      name: value.name,
      number: value.number,
    });
    return data;
}


export async function deleteContact(value) {
    await axios.delete(`/contacts/${value.id}`);
  
    return value.id;
  }