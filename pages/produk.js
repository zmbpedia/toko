import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import React from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { default as minifyCssString } from "minify-css-string";
import { NextSeo } from 'next-seo';
function truncate(str) {
	return str.length > 10 ? str.substring(0, 20) + "..." : str;
}
export default class Produk extends React.Component {
	 constructor() {
    super();
    this.state = {
      imageIndex: 0,
      data: [],
      gm: "",
      offset: 0,
      perPage: 3,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
	static async getInitialProps() {
		const res = await fetch("https://zmbpediabogor.store/api/catalogdata");
		const show = await res.json();
		   let gambarnya ='';
		let altgam = '';
      if(show.data.length){
      gambarnya = await show.ogimg; 
        altgam = await show.alt; 
    }
	   return { show, gambarnya, altgam }
	}



	  componentDidMount() {
    window.scrollTo(0, 0);
    var myArray = [];
    for (var i = 0; i < this.props.show.data.length; i++) {
      var value = this.props.show.data[i];
      var values = this.props.show.data[0];
      var num = value["id"];
      var namaproduk = value["namaproduk"];
      var harga = value["harga"];
      var gambar = value["gambar"];
      var sh = values["gambar"];
      var on = value["stok"];
      var kast = value["kat"];
      var stok;

      if (on === "true") {
        stok = "sale";
      } else {
        stok = "out of stock";
      }
      var ulr = window.location.href;
      var one = ulr.split("/")[4];
      var two = ulr.split("/")[5];
      this.setState({
        namekat: "zmbpediabogor - Katalog produk",
        ada: "yes",
        titles: "zmbpediabogor - Katalog produk",
        urls: "https://zmbpediabogor.store/product",
        gam: sh,
      });
      myArray.push({
        id: num,
        nama: namaproduk,
        gambar: gambar,
        harga: harga,
        stok: on,
      });
    }

    if (myArray.length) {
      const slice = myArray.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((a) => (

								<div className="col-12 col-sm-6 col-lg-4 featureCol mb-7">
									<div className="border">
										<div className="imgHolder position-relative w-100 overflow-hidden">
										<img
											src={a.gambar}
											style={{
												height: "300px",
												objectFit: "cover",
												width: "100%",
											}}
											id="wax-img"
											alt={a.namaproduk}
											className="img-fluid"
										/>
									</div>
										<div className="text-center py-5 px-4">
											<span className="title d-block mb-2">
											<Link
                      href="/produk/[id]/[product]"
                      as={`/produk/${a.id}/${a.nama.replace(/\s/g,"-")}`}
                    >
                      <a> {truncate(a.nama)}</a>
                    </Link>
											</span>
											<span className="price d-block fwEbold">{a.harga}</span>
											     {a.stok ? <span class="hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8 ups">Tersedia</span> : 
 <span class="hotOffer fwEbold text-uppercase text-white position-absolute d-block ml-8 abs">Stok habis</span>}
										</div>
									</div>
								</div>
    ));

      this.setState({
        pageCount: Math.ceil(myArray.length / this.state.perPage),
        postData,
      });
    } else {
      this.setState({ ada: "no" });
    }
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset,
    });
    this.receivedData(offset);
  };

  receivedData = (e) => {
    console.log(e);
    window.scrollTo(0, 0);
    var myArray = [];
    for (var i = 0; i < this.props.show.data.length; i++) {
      var value = this.props.show.data[i];
      var values = this.props.show.data[0];
      var num = value["id"];
      var namaproduk = value["namaproduk"];
      var harga = value["harga"];
      var gambar = value["gambar"];
      var sh = values["gambar"];
      var on = value["stok"];
      var kast = value["kat"];
      var on;

      if (on === "true") {
        stok = "sale";
      } else {
        stok = "out of stock";
      }
      var ulr = window.location.href;
      var one = ulr.split("/")[4];
      var two = ulr.split("/")[5];

      myArray.push({
        id: num,
        nama: namaproduk,
        gambar: gambar,
        harga: harga,
        stok: stok,
      });
    }


 const slice = myArray.slice(e, e + this.state.perPage);
    const postData = slice.map((a) => (

								<div className="col-12 col-sm-6 col-lg-4 featureCol mb-7">
									<div className="border">
										<div className="imgHolder position-relative w-100 overflow-hidden">
										<img
											src={a.gambar}
											style={{
												height: "300px",
												objectFit: "cover",
												width: "100%",
											}}
											id="wax-img"
											alt={a.namaproduk}
											className="img-fluid"
										/>
									</div>
										<div className="text-center py-5 px-4">
											<span className="title d-block mb-2">
											<Link
                      href="/produk/[id]/[product]"
                      as={`/produk/${a.id}/${a.nama.replace(/\s/g,"-")}`}
                    >
                      <a> {truncate(a.nama)}</a>
                    </Link>
											</span>
											<span className="price d-block fwEbold">{a.harga}</span>
											{a.stok ? <span class="hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8 ups">Tersedia</span> : 
 <span class="hotOffer fwEbold text-uppercase text-white position-absolute d-block ml-8 abs">Stok habis</span>
}
										</div>
									</div>
								</div>


    	   ));

    this.setState({
      pageCount: Math.ceil(myArray.length / this.state.perPage),
      postData,
    });
  };

	render() {

const cssString = `
  .border{  border: 1px solid #dee2e6!important}
  .overl{
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(255,255,255, .8);
          }
.productTextHolder .price {
    font-size: 15px;
    margin-top:20px;
    }
          .featureCol .price {
    font-size: 13px;
    line-height: 18px;
    color: #16941a;
}
.featureCol .hotOffer {
    background: #5ba515;
    top: 30px;
    left: 0;
    margin-left: 0 !important;
}
.featureCol .hotOffer.ups {
      top: 23px !important;
}
.featureCol .hotOffer.abs {
  background:#f9861f !important;
}
          `;

		const { currentPage } = this.state;
		return (

<>
	<Layout>
    <style
          dangerouslySetInnerHTML={{
            __html: minifyCssString(cssString),
          }}
        />

 <NextSeo
      title="zmbpediabogor - Katalog produk"
      description="Toko aneka macam tanaman hias"
      canonical="https://zmbpediabogor.store/produk"
      openGraph={{
        url: "https://zmbpediabogor.store/produk",
        title: "zmbpediabogor - Katalog produk",
        description: "Toko aneka macam tanaman hias",
        images: [
          {
            url: this.props.gambarnya,
           width: 600,
            height: 315,
            alt: this.props.altgam,
          }
        ],
        site_name: 'zmbpediabogor',
      }}
    />
 

<section className="introBannerHolder d-flex w-100 bgCover" style={{
															background: `url(${this.props.gambarnya})`,
															backgroundSize: `cover`,

															backgroundPosition: `center`,
														}}
														>
														<div className="overl"></div>	
				<div class="container">
					<div class="row">
						<div class="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
							<h1 class="headingIV fwEbold playfair mb-4">Katalog</h1>
							<ul class="list-unstyled breadCrumbs d-flex justify-content-center">
								<li class="mr-2">
                <Link href="/" to="/">
                <a>Beranda</a>
                </Link>
                </li>
								<li class="mr-2">/</li>
								<li class="active">Katalog</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			

	<div class="twoColumns container pt-lg-23 pb-lg-20 pt-md-16 pb-md-4 pt-10 pb-4">
				<div class="row">
					<div class="col-12 col-lg-12 order-lg-3">
					
						<article id="content">
					 
							<div class="row">

				{this.state.postData}
		
							 
								<div class="col-12 pt-3 mb-lg-0 mb-md-6 mb-3">
							
									{/*<ul class="list-unstyled pagination d-flex justify-content-center align-items-end">
										<li><a href="javascript:void(0);"><i class="fas fa-chevron-left"></i></a></li>
										<li class="active"><a href="javascript:void(0);">1</a></li>
										<li><a href="javascript:void(0);">2</a></li>
										<li>...</li>
										<li><a href="javascript:void(0);"><i class="fas fa-chevron-right"></i></a></li>
									</ul>*/}

 <ReactPaginate
                      previousLabel={"prev"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={this.state.pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={this.handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}
                    />

								</div>


							</div>
						</article>
					</div>
					 
				</div>
			</div>
	</Layout>

</>

		);
	}
}