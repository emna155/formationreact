/*import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
              "url(" + require("assets/img/land.jpg").default + ")",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Bienvenue sur notre site
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    This is a simple example of a Landing Page you can build
                    using Notus React. It features multiple CSS components based
                    on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 0"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-red-700 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Check Notus React!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-1-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}*/
import React, { useState } from 'react';

// Styles en ligne pour garantir l'affichage
const styles = {
  // Couleurs
  primary: '#6A4E23',
  dark: '#6A4E23',
  white: '#ffffff',
  gray: '#f5f5f5',
  grayText: '#666666',
};

// Composant Icon SVG
const Icon = ({ name, size = 20, color = 'currentColor' }) => {
  const icons = {
    cart: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>,
    search: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>,
    user: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
    menu: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>,
    close: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>,
    heart: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
    eye: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>,
    left: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>,
    right: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>,
    phone: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
    location: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    mail: <svg width={size} height={size} fill="none" stroke={color} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
  };
  return icons[name] || null;
};

// Header
const Header = ({ cartCount, toggleCart, toggleMenu, isMenuOpen }) => (
  <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
    {/* Top Bar */}
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '10px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <select style={{ backgroundColor: styles.primary, color: '#fff', padding: '5px 10px', border: 'none', borderRadius: '4px',  }}>
            <option>DT</option>
          </select>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Icon name="phone" size={16}/> +216 29 743 489
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Icon name="user" size={16}/> My Account
          </button>
          <button style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Icon name="location" size={16}/> Location
          </button>
        </div>
      </div>
    </div>
    
    {/* Navigation */}
    <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '28px', fontWeight: 'bold', color: styles.primary }}>FreshShop</span>
      
      <button onClick={toggleMenu} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer' }} className="mobile-menu-btn">
        <Icon name={isMenuOpen ? 'close' : 'menu'} size={28}/>
      </button>
      
      <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', margin: 0, padding: 0 }}>
        {['Home', 'About Us', 'Shop', 'Gallery', 'Contact'].map((item, i) => (
          <li key={i}>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '16px', textTransform: 'uppercase', color: i === 0 ? styles.primary : '#333' }}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: styles.primary }}>
          <Icon name="search" size={22}/>
        </button>
        <button onClick={toggleCart} style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }}>
          <Icon name="cart" size={22}/>
          <span style={{ position: 'absolute', top: '-8px', right: '-8px', backgroundColor: styles.primary, color: '#fff', fontSize: '12px', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cartCount}</span>
        </button>
      </div>
    </nav>
  </header>
);

// Hero Slider
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "L'abeille noire du nord", subtitle: "Fresh organic vegetables and fruits for your healthy lifestyle",  bg:
    "url(" + require("assets/img/p5.png").default + ")" },
    { title: "Organic Products", subtitle: "Best quality products directly from farms to your table", bg: "url(https://i.pinimg.com/originals/85/95/95/859595887274b1e05312239796942c53.gif)" },
    { title: "Special Offers", subtitle: "Up to 50% off on selected items this week", bg: "url(" + require("assets/img/p3.jpg").default + ")" },
  ];
  
  return (
    <div style={{  backgroundImage: slides[current].bg,backgroundSize: 'cover',backgroundPosition: 'center', minHeight: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', color: 'black', textAlign: 'center', transition: 'background 0.5s ease' }}>
      <div style={{ maxWidth: '800px', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>{slides[current].title}</h1>
        <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9 }}>{slides[current].subtitle}</p>
        <button style={{ backgroundColor:styles.primary, color: '#fff', border: 'none',borderRadius:'50%', padding: '15px 40px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}>
          Shop Now
        </button>
      </div>
      <button onClick={() => setCurrent(p => p === 0 ? slides.length-1 : p-1)} style={{ position: 'absolute', left: '20px', backgroundColor: styles.primary, border: 'none', padding: '15px', cursor: 'pointer', color: '#fff' }}>
        <Icon name="left" size={24}/>
      </button>

      <button onClick={() => setCurrent(p => (p+1) % slides.length)} style={{ position: 'absolute', right: '20px', backgroundColor: styles.primary, border: 'none', padding: '15px', cursor: 'pointer', color: '#fff' }}>
        <Icon name="right" size={24}/>
      </button>
      <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '10px' }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: '12px', height: '12px', borderRadius: '50%', border: 'none', cursor: 'pointer', backgroundColor: i === current ? styles.primary : 'rgba(255,255,255,0.5)' }}/>
        ))}
      </div>
    </div>
  );
};

// Categories
const Categories = () => {
  const cats = [
    { 
      name: "Miels", 
      backgroundImage: "https://www.sweethoneyco.co.uk/wp-content/uploads/2020/08/bee-products-scaled.jpg" 
    },
    { 
      name: "Produits du miel", 
      backgroundImage: "https://www.sweethoneyco.co.uk/wp-content/uploads/2020/08/bee-products-scaled.jpg" 
    },    
    { 
      name: "Produit cosmétique", 
      backgroundImage: "https://www.sweethoneyco.co.uk/wp-content/uploads/2020/08/bee-products-scaled.jpg" 
    
    },
  ];

  return (
    <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px' 
      }}>
        {cats.map((c, i) => (
          <div 
            key={i}
            style={{
              height: '250px',
              borderRadius: '10px',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: c.color || 'transparent',
              backgroundImage: c.backgroundImage ? `url(${c.backgroundImage})` : 'none',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
            {/* Contenu centré */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ 
                fontSize: '50px', 
                color: c.backgroundImage ? '#fff' : '#000', 
                textShadow: '0px 2px 5px rgba(0,0,0,0.5)'
              }}>
                {c.name}
              </span>
            </div>

            {/* Bouton */}
            <button 
              style={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#6A4E23',
                color: '#fff',
                border: 'none',
                padding: '15px',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Voir {c.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// Product Card
const ProductCard = ({ product, onAddToCart }) => {
  const [hover, setHover] = useState(false);
  
  return (
    
    <div 
      style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.1)', position: 'relative' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      
      <div style={{ position: 'relative', height: '200px', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {product.badge && (
          <span style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: product.badge === 'Sale' ? styles.primary : '#000', color: '#fff', padding: '5px 12px', fontSize: '12px', fontWeight: 'bold' }}>
            {product.badge}
          </span>
        )}
        <span style={{ fontSize: '70px' }}>{product.emoji}</span>
        
        {hover && (
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <button style={{ backgroundColor: styles.primary, border: 'none', padding: '8px', cursor: 'pointer', color: '#fff' }}><Icon name="eye" size={18}/></button>
              <button style={{ backgroundColor: styles.primary, border: 'none', padding: '8px', cursor: 'pointer', color: '#fff' }}><Icon name="heart" size={18}/></button>
            </div>
            <button onClick={() => onAddToCart(product)} style={{ position: 'absolute', bottom: '10px', left: '10px', backgroundColor: styles.primary, border: 'none', padding: '10px 20px', cursor: 'pointer', color: '#fff', fontWeight: 'bold' }}>
              Add to Cart
            </button>
          </div>
        )}
      </div>
      <div style={{ padding: '15px', backgroundColor: '#f5f5f5' }}>
        <h4 style={{ fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>{product.name}</h4>
        <span style={{ backgroundColor: styles.primary, color: '#fff', padding: '5px 12px', fontWeight: 'bold' }}>${product.price}</span>
      </div>
    </div>
  );
};

// Products Section
const Products = ({ addToCart }) => {
  const [filter, setFilter] = useState('all');
  const products = [
    { id: 1, name: "Fresh Broccoli", price: "7.79", badge: "Sale", category: "best" },
    { id: 2, name: "Organic Apples", price: "9.79", badge: "New", category: "top"},
    { id: 3, name: "Red Tomatoes", price: "10.79", badge: "Sale", category: "top" },
    { id: 4, name: "Fresh Carrots", price: "15.79", badge: "Sale", category: "best" },
  ];
  
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  
  return (
    <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Products</h2>
        <p style={{ color: '#666' }}>Fresh organic products for your healthy lifestyle</p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {[{k:'all',l:'All'}, {k:'top',l:'Top Featured'}, {k:'best',l:'Best Seller'}].map(f => (
          <button key={f.k} onClick={() => setFilter(f.k)} style={{ backgroundColor: filter === f.k ? '#000' : styles.primary, color: '#fff', border: 'none', padding: '12px 30px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
            {f.l}
          </button>
        ))}
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {filtered.map(p => <ProductCard key={p.id} product={p} onAddToCart={addToCart}/>)}
      </div>
    </section>
  );
};

// Blog
const Blog = () => {
  const posts = [
    { title: "Healthy Eating Tips", desc: "Discover the best ways to incorporate fresh vegetables into your daily diet." },
    { title: "Organic Farming", desc: "Learn about sustainable farming practices and their benefits." },
    { title: "Seasonal Fruits", desc: "A guide to choosing the best seasonal fruits." },
  ];
  
  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#f5f5f5' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' }}>Latest Blog</h2>
          <p style={{ color: '#666' }}>Tips and news about healthy living</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {posts.map((p, i) => (
            <div key={i} style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}>
              <div style={{ height: '180px', backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '60px' }}>{p.emoji}</span>
              </div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>{p.title}</h3>
                <p style={{ color: '#666', fontSize: '14px' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer style={{ backgroundColor: '#000', color: '#fff', padding: '60px 20px 30px' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '400px', marginBottom: '40px' }}>
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: `2px solid ${styles.primary}`, paddingBottom: '10px', display: 'inline-block' }}>Business Hours</h3>
          <p style={{ color: '#999', marginBottom: '5px' }}>Mon - Fri: 08:00am - 05:00pm</p>
          <p style={{ color: '#999', marginBottom: '5px' }}>Saturday: 10:00am - 08:00pm</p>
          <p style={{ color: '#999' }}>Sunday: <span style={{ color: styles.primary }}>Closed</span></p>
        </div>
        
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px', borderBottom: `2px solid ${styles.primary}`, paddingBottom: '10px', display: 'inline-block' }}>Contact Us</h3>
          <p style={{ color: '#999', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><Icon name="location" size={16}/> Bizerte,Tunisie</p>
          <p style={{ color: '#999', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}><Icon name="phone" size={16}/> +216-29-743-489</p>
          <p style={{ color: '#999', display: 'flex', alignItems: 'center', gap: '10px' }}><Icon name="mail" size={16}/> contact@gmail.com</p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #333', paddingTop: '20px', textAlign: 'center', color: '#666' }}>
        © 2025 l'abeille noire. All Rights Reserved.
      </div>
    </div>
  </footer>
);

// Cart Sidebar
const CartSidebar = ({ cart, showCart, toggleCart }) => {
  if (!showCart) return null;
  
  return (
    <div style={{ position: 'fixed', top: '120px', right: '20px', backgroundColor: '#fff', boxShadow: '0 5px 30px rgba(0,0,0,0.2)', borderRadius: '10px', width: '320px', maxWidth: '90vw', zIndex: 1001, overflow: 'hidden' }}>
      <div style={{ backgroundColor: styles.primary, color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontWeight: 'bold', margin: 0 }}>Cart ({cart.length})</h3>
        <button onClick={toggleCart} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}><Icon name="close" size={20}/></button>
      </div>
      <div style={{ padding: '15px', maxHeight: '300px', overflowY: 'auto' }}>
        {cart.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999', padding: '20px 0' }}>Your cart is empty</p>
        ) : (
          cart.map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' }}>
              <span><span style={{ marginRight: '10px', fontSize: '24px' }}>{item.emoji}</span>{item.name}</span>
              <span style={{ fontWeight: 'bold' }}>${item.price}</span>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div style={{ padding: '15px', backgroundColor: '#f5f5f5' }}>
          <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '15px' }}>
            Total: ${cart.reduce((s, i) => s + parseFloat(i.price), 0).toFixed(2)}
          </p>
          <button style={{ width: '100%', backgroundColor: styles.primary, color: '#fff', border: 'none', padding: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

// Main Component
export default function Landing() {
  const [cart, setCart] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  
  return (
    <div style={{ fontFamily: "'Poppins', 'Segoe UI', sans-serif", minHeight: '100vh' }}>
      <Header 
        cartCount={cart.length} 
        toggleCart={() => setShowCart(!showCart)} 
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)} 
        isMenuOpen={isMenuOpen}
      />
      <CartSidebar cart={cart} showCart={showCart} toggleCart={() => setShowCart(false)}/>
      <main>
        <HeroSlider/>
        <Categories/>
        <Products addToCart={addToCart}/>
        <Blog/>
      </main>
      <Footer/>
    </div>
  );
}