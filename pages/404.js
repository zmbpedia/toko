import React, { Component } from "react";
import Layout from "../components/layout";
import Link from "next/link";
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
                            <div className="error" style={{'margin-bottom': '100px'}}>
                                <h1>404</h1>
                                <h2>OPPS! HALAMAN TIDAK DITEMUKAN</h2>
                                <p>maaf kemungkinan halaman yang ada cari tidak ada, atau sudah diganti / di hapus</p>
                               <Link
                        href="/"
                        to={`/`}
                      >
                                <a className="btn">Kembali ke halaman awal</a>
                                </Link>
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