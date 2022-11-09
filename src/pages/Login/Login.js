import React, { useContext } from "react";
import { Link } from "react-router-dom";
import google from '../../assets/button/google.png';
import image from "../../assets/login/login.jpg";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {

    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignUP = () => {
        signInWithGoogle()
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
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your email"
                name="email"
                className="input input-bordered"
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
              />
              <label className="label">
                <Link className="label-text-alt link link-hover" to="">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <div className="text-center mb-6">
            <p className="text-xl">or login with</p>
            <div className="divider my-0 w-3/5 mx-auto"></div>
            <button onClick={handleGoogleSignUP}><img className="w-28" src={google} alt="" /></button>
          </div>
          <p className="text-center">
            Don't have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
