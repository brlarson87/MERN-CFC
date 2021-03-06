//CORE REACT
import React, { Fragment } from "react";

//Components
import Header from "./Header";
import Footer from "../layout/Footer";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div className='container'>
        <h1
          style={{
            marginTop: "100px",
          }}
        >
          WORK IN PROGRESS
        </h1>
        <div className='about-us'>
          <div className='about-us__text-box'>
            <h2 className='about-us__text-box--title'>About Us</h2>
            <p className='about-us__text-box--text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, quo
              id unde tenetur reprehenderit consequatur ut deleniti. Nobis
              nostrum, sequi delectus voluptatum itaque iure explicabo.
              Quibusdam blanditiis consequatur quis vitae expedita dolorum
              cupiditate, eius dolores voluptate. Blanditiis labore quidem et
              nisi corporis quod doloribus assumenda explicabo fugit iure.
              Corporis ipsum porro, laboriosam perspiciatis nulla, reprehenderit
              praesentium quaerat assumenda fuga accusamus atque sint quia
              repellendus velit nostrum. Voluptatibus fugiat fugit, doloribus
              unde est debitis provident ullam porro incidunt adipisci iure
              necessitatibus repudiandae, expedita nam distinctio aliquid
              cupiditate! Eum cumque, libero voluptatem provident accusantium
              nihil, rerum maxime vel aliquid quam vero molestiae.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
