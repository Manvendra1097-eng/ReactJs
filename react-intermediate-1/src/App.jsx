import { useState } from 'react';
import './App.css';

function App() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    about: '',
    isVisible: true,
    mode: 'Online Mode',
    language: '',
  });

  const changeHandler = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormDate) => {
      return { ...prevFormDate, [name]: type === 'checkbox' ? checked : value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        {/* first name input field */}
        <div className='firstName'>
          <input
            onChange={changeHandler}
            type='text'
            name='firstName'
            value={formData.firstName}
            placeholder='First Name'
          />
        </div>
        {/* last name input field */}
        <div className='lastName'>
          <input
            onChange={changeHandler}
            type='text'
            name='lastName'
            value={formData.lastName}
            placeholder='Last Name'
          />
        </div>
        {/* last name input field */}
        <div className='email'>
          <input
            onChange={changeHandler}
            type='email'
            name='email'
            value={formData.email}
            placeholder='Email'
          />
        </div>
        {/* last name input field */}
        <div className='about'>
          <textarea
            onChange={changeHandler}
            name='about'
            value={formData.about}
            placeholder='Enter about Yourself'
          />
        </div>
        {/* last name input field */}
        <div className='about'>
          <input
            onChange={changeHandler}
            type='checkbox'
            name='isVisible'
            // value={formData.isVisible}
            checked={formData.isVisible}
            id='isVisible'
          />
          <label htmlFor='isVisible'>Is Visible?</label>
        </div>
        {/* radio input field */}
        <div className='OnlineMode'>
          <input
            onChange={changeHandler}
            type='radio'
            name='mode'
            value='Online Mode'
            id='Online'
            checked={formData.mode === 'Online Mode'}
          />
          <label htmlFor='Online'>Online Mode</label>
          <input
            onChange={changeHandler}
            type='radio'
            name='mode'
            value='Offline Mode'
            id='Offline'
            checked={formData.mode === 'Offline Mode'}
          />
          <label htmlFor='Offline'>Offline Mode</label>
        </div>

        <div>
          <label htmlFor='car'>Language </label>
          <select
            id='car'
            name='language'
            value={formData.language}
            onChange={changeHandler}
          >
            <option value='Java'>Java</option>
            <option value='Cpp'>Cpp</option>
            <option value='JavaScript'>JavaScript</option>
            <option value='Python'>Python</option>
          </select>
        </div>

        <div>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
}

export default App;
