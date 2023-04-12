import { useState } from 'react';
import './Form.css';
const Form = () => {
  const [formDate, setFormDate] = useState({
    firstName: '',
    lastName: '',
    country: 'India',
    comments: true,
    offers: false,
    pushN: 'Everything',
  });

  const changeHandler = (e) => {
    const { name, type, value, checked } = e.target;
    setFormDate((prev) => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formDate);
  };

  return (
    <>
      <div className='form-container'>
        <form onSubmit={submitHandler}>
          {/* first name */}
          <div className='formGroup'>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              name='firstName'
              value={formDate.firstName}
              type='text'
              placeholder='First Name'
              onChange={changeHandler}
            />
          </div>

          {/* last name */}
          <div className='formGroup'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              id='lastName'
              name='lastName'
              value={formDate.lastName}
              type='text'
              placeholder='Last Name'
              onChange={changeHandler}
            />
          </div>

          {/* country */}
          <div className='formGroup'>
            <label htmlFor='country'>Country</label>
            <div className='select'>
              <select
                id='country'
                name='country'
                value={formDate.country}
                onChange={changeHandler}
              >
                <option value='India'>India</option>
                <option value='USA'>USA</option>
                <option value='Australia'>Australia</option>
                <option value='Canada'>Canada</option>
              </select>
            </div>
          </div>

          <div className='comments'>
            <input
              type='checkbox'
              id='comments'
              name='comments'
              checked={formDate.comments}
              onChange={changeHandler}
            />
            <label htmlFor='comments'> Comments</label>
            <p>Get notified if someone put an comment</p>
          </div>

          <div className='offers'>
            <input
              type='checkbox'
              id='offers'
              name='offers'
              checked={formDate.offers}
              onChange={changeHandler}
            />
            <label htmlFor='offers'> Offers</label>
            <p>Get notified regarding new offers</p>
          </div>

          <div>
            <input
              type='radio'
              id='everything'
              name='pushN'
              value='Everything'
              checked={formDate.pushN === 'Everything'}
              onChange={changeHandler}
            />
            <label htmlFor='everything'>Everything</label>
          </div>
          <div>
            <input
              type='radio'
              id='same'
              name='pushN'
              value='Same as comments'
              checked={formDate.pushN === 'Same as comments'}
              onChange={changeHandler}
            />
            <label htmlFor='same'>Same as comments</label>
          </div>

          <button>Save</button>
        </form>
      </div>
    </>
  );
};

export default Form;
