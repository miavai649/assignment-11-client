import React, { useContext } from "react";
import { Link } from "react-router-dom";
import google from '../../assets/button/google.png';
import image from "../../assets/Signup/signup.jpg";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
    const { signInWithGoogle, createUser } = useContext(AuthContext);

    const handleGoogleSignUP = () => {
        signInWithGoogle()
            .then(result => {
            const user = result.user
            console.log(user)
            })
        .catch(err => console.error(err))
    }

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value 
        const password = form.password.value
        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(err => console.error(err))
    }

  return (
    <div className="hero w-full my-28">
      <div className="hero-content gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-5/6" src={image} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-16">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Your Photo"
                name="photoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <div className="text-center mb-6">
            <p className="text-xl">or login with</p>
            <div className="divider my-0 w-3/5 mx-auto"></div>
            <button onClick={handleGoogleSignUP}>
              <img className="w-28" src={google} alt="" />
            </button>
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
