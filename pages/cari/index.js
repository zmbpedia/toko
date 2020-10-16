import React, { Component } from "react";
import Layout from "../../components/layout";

export default class error extends React.Component {
  constructor() {
    super();
  }


  render() {


   return(
        <Layout>
     <main className="main-content-wrapper">
            <div className="error-area pt--90 pt-xl--70 pb--120 pb-xl--100 pb-lg--95 pb-sm--90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8 text-center">
                            <div className="error">
                                <h1>404</h1>
                                <h2>OPPS! PAGE NOT BE FOUND</h2>
                                <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>
                               
                                <a href="/" className="btn">Back to home page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
           </Layout>

     );
  }
}