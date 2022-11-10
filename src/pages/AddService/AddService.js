import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AddService = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
      <form className='mx-80'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          name="name"
          required
        />
        <input
          type="text"
          placeholder="Cake Photo URL"
          className="input input-bordered w-full"
          name="photoURL"
          required
        />
        <input
          type="text"
          placeholder="Your Email"
          className="input input-bordered w-full"
          defaultValue={user?.email}
          readOnly
          name="email"
        />
        <input
          type="number"
          placeholder="Price"
          className="input input-bordered w-full"
          name="price"
          required
        />
        </div>
      <textarea name="details" className="textarea textarea-bordered h-48 w-full my-6" placeholder="Details"></textarea>
      <input className="btn w-80 mb-6" type="submit" value="Add Product" />
      </form>
    </div>
    );
};

export default AddService;