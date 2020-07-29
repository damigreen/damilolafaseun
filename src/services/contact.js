import axios from 'axios';

const url = 'http://localhost:3004/api/contacts';

const sendContact = (commentObj) => {
  const response = axios.post(url, commentObj);
  console.log(response.data)
  return response.data;
}

export default { sendContact };