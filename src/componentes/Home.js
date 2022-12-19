import React from "react";
import { Link } from 'react-router-dom';



const Home = () => {


  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="md:w-2/3 lg:w-2/5">
        <h1 className="inline bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold  md:flex md:justify-center">
            HOME E-COMMERCE G12
        </h1> 
        <Link 
            type="submit"
            value="Crear cuenta"
            className="block text-center my-5 hover:cursor-pointer hover:-translate-y-0.5" 
            to={"/login"}>
            Iniciar sesión</Link>
      </div>
    </main>
  );
}
export default Home;