import React from 'react';
import { useForm } from 'react-hook-form';
import './SignupForm.css'; 

function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      window.alert('Submission successful');
      console.log('Form Data:', data);
    } else {
      window.alert('Please correct the errors before submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-heading">Sign Up</h2>

      <div className="form-field">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" {...register('name', { required: 'Name is required' })}
          placeholder="Enter your name" className="form-input"/>
        {errors.name && <p className="form-error">{errors.name.message}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          id="email"
          {...register('email', { 
            required: 'Email is required', 
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Enter a valid email'
            }
          })}
          placeholder="Enter your email"
          className="form-input"
        />
        {errors.email && <p className="form-error">{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div className="form-field">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', { 
            required: 'Password is required', 
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long'
            }
          })}
          placeholder="Enter your password"className="form-input"
        />
        {errors.password && <p className="form-error">{errors.password.message}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input
          id="phone"
          {...register('phone', { 
            required: 'Phone number is required', 
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be 10 digits'
            }
          })}
          placeholder="Enter your phone number"
          className="form-input"
        />
        {errors.phone && <p className="form-error">{errors.phone.message}</p>}
      </div>

      <button type="submit" className="form-button">Sign Up</button>
    </form>
  );
}

export default SignupForm;
