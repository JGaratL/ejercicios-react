import React, { useState } from 'react';
import '../styles/UserForm.css';

function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    description: '',
    gender: '',
    age: 0,
    country: 'Spain',
    province: '',
    hobbies: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        hobbies: checked
          ? [...formData.hobbies, value]
          : formData.hobbies.filter((hobby) => hobby !== value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCountryChange = (e) => {
    setFormData({
      ...formData,
      country: e.target.value,
      province: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const provinces = formData.country === 'Spain' ? ['Madrid', 'Guadalajara'] : [];

  return (
    <div  className="form-container">
        <form onSubmit={handleSubmit} className="user-form">
        <label>
            Name:
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            />
        </label>
        <br />

        <label>
            Firstname:
            <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            />
        </label>
        <br />

        <label>
            Description:
            <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            ></textarea>
        </label>
        <br />

        <label>
            Gender:
            <label>
            Male
            <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleInputChange}
            />
            </label>
            <label>
            Female
            <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleInputChange}
            />
            </label>
        </label>
        <br />

        <label>
            Age:
            <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            min="0"
            />
        </label>
        <br />

        <label>
            Country:
            <select name="country" value={formData.country} onChange={handleCountryChange}>
            <option value="Spain">Spain</option>
            <option value="USA">USA</option>
            </select>
        </label>
        <br />

        {formData.country === 'Spain' && (
            <label>
            Province:
            <select name="province" value={formData.province} onChange={handleInputChange}>
                <option value="">Select a province</option>
                {provinces.map((province) => (
                <option key={province} value={province}>
                    {province}
                </option>
                ))}
            </select>
            </label>
        )}
        <br />

        <label>
            Hobbies:
            <label>
            Games
            <input
                type="checkbox"
                name="hobbies"
                value="Games"
                checked={formData.hobbies.includes('Games')}
                onChange={handleInputChange}
            />
            </label>
            <label>
            Football
            <input
                type="checkbox"
                name="hobbies"
                value="Football"
                checked={formData.hobbies.includes('Football')}
                onChange={handleInputChange}
            />
            </label>
            <label>
            Basketball
            <input
                type="checkbox"
                name="hobbies"
                value="Basketball"
                checked={formData.hobbies.includes('Basketball')}
                onChange={handleInputChange}
            />
            </label>
            <label>
            Art
            <input
                type="checkbox"
                name="hobbies"
                value="Art"
                checked={formData.hobbies.includes('Art')}
                onChange={handleInputChange}
            />
            </label>
        </label>
        <br />

        <button type="submit"  className="submit-button">Submit</button>
        </form>
    </div>
  );
}

export default UserForm;
