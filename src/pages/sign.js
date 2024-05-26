import React,{useState} from 'react';
import '../styles.css'; 
import signupImage from '../imgvid/signup.jpg';
import logo from '../imgvid/logo.jpg'; 
import Navbar from '../components/navbar';

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        password: ''
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const { name, email, password } = formData;
    const newErrors = {
      name: '',
      email: '',
      password: ''
    };

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='back'>
        <Navbar/>
        <div className="container">
        <img src={signupImage} alt="Sign Up" />
            <div className='forms'>
            <form onSubmit={handleSubmit}>
                
                <h1>Sign Up</h1><br /><br />
                <h2>Get better offers and customized shopping preferences & more!</h2><br /><br />
                <div className='input-group'>
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <span style={{ color: 'red' }}>{errors.name}</span>
                </div>

                <div className='input-group'>
                <label htmlFor="email">Email:</label><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <span style={{ color: 'red' }}>{errors.email}</span>
                </div>

                <div className='input-group'>
                <label htmlFor="password">Password:</label><br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <span style={{ color: 'red' }}>{errors.password}</span>
                </div>

                <div className="input-group">
                    <input type="checkbox" id="terms" name="terms" required/> I agree to SwiftStore's <a href="#">Terms of Service</a><br /><br />
                </div><br />

                <div className='input-group'>
                <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        </div>
    </div>
    );
    }

export default SignUpForm;