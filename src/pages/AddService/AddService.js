import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const {user} = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const service = {
            name: form.name.value,
            photoURL: form.photoURL.value,
            price: form.price.value,
            email: form.email.value,
            details: form.details.value
        }

        fetch('https://assignment-11-server-omega-one.vercel.app/cakes', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success('Order placed Successfully')
        form.reset()
      })
    .catch(err => console.error(err))

    }

    return (
        <div>
      <form onSubmit={handleSubmit} className='mx-80'>
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