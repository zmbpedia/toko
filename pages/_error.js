import React, { Component } from "react";
import Layout from "../components/layout";
import { NextSeo } from 'next-seo';
import Link from "next/link";
function Error({ statusCode }) {
  return (

   <Layout>

 <NextSeo
      title="Plant29 - Error page enot found"
      description=""
      canonical=""
      openGraph={{
        url: "",
        title: "Error page enot found",
        description: "",
        images: [
          {
            url: '',
            width: 800,
            height: 600,
            alt: '',
          },
          {
            url: '',
            width: 900,
            height: 800,
             alt: '',
          }
        ],
        site_name: 'plant29',
      }}
    />
     <main className="main-content-wrapper">
            <div className="error-area pt--90 pt-xl--70 pb--120 pb-xl--100 pb-lg--95 pb-sm--90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8 text-center">
                            <div className="error" style={{'margin-bottom': '100px'}}>
                                <h1> {statusCode
        ? `${statusCode}`
        : ''}</h1>
                                <h2>SORRY SOMETHING WAS WRONG</h2>
                                <p>{statusCode
        ? `An error occurred on server`
        : 'An error occurred on client'}</p>
                               <Link href="/" to="/">
                                <a className="btn">Back to home page</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
           </Layout>


  
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error