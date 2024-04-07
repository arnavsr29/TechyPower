import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";
  
const Home = () => {
  return (

    <>
    <div className="home" id="home">
        <main>
            <h1>TechyPower</h1>
            <p> Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
         <img src={vg} alt="Graphics" />

         <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
         </div>

    </div>

    <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
          TechyPower is a pioneering tech company dedicated to empowering the problem-solving abilities of children
          through innovative services and solutions. At TechyPower, our mission is to nurture the next generation
          of thinkers, creators, and problem solvers by providing them with the tools and resources they need 
          to thrive in an increasingly complex world. With a deep understanding of the importance of critical 
          thinking and problem-solving skills in today's fast-paced digital age, TechyPower is committed to 
          providing full-stack services as well as peer-to-peer support that inspire curiosity, foster creativity,
          and cultivate resilience in young minds.

          At TechyPower, we believe that every child has the potential to make a positive impact on the world, and we
          are dedicated to equipping them with the skills and confidence they need to unleash their full potential. Join
          us on our journey to empower the problem solvers of tomorrow and shape a brighter future for generations to come.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home