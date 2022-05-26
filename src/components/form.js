import { useState } from 'react';

export default function Form(
  props = {
    name: '',
    email: '',
    message: '',
  }
) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [message, setMessage] = useState(props.message);
  return (
    <div>
      <form className="form">
        <p>Name: {name}</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <p>Email: {email}</p>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <p>Message: {message}</p>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
