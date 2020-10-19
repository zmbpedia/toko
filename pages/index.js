import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import React from "react";
import Link from "next/link";
import { NextSeo } from 'next-seo';
import Slider from "react-slick";
import { default as minifyCssString } from "minify-css-string";
function truncate(str) {
	return str.length > 10 ? str.substring(0, 20) + "..." : str;
}
export default class Home extends React.Component {
	static async getInitialProps() {
			const ress = await fetch("https://zmbpediabogor.store/api/slide");
		const shows = await ress.json();
		const res = await fetch("https://zmbpediabogor.store/api/homie");
		const show = await res.json();
	
		return { show, shows };
	}
	render() {
		 var settings = {
      dots: true,
      fade: true,
      nextArrow: false,
      prevArrow: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const cssString = `
.bgCover{
						background-repeate
					}
					.mainHeader {
						margin-top: 30px;
					}
					.overl{
						width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(255,255,255, .5);
					}
					.featureCol .price {
    font-size: 13px;
    line-height: 18px;
    color: #16941a;
}`;

		return (
			<Layout>
			    <style
          dangerouslySetInnerHTML={{
            __html: minifyCssString(cssString),
          }}
        />

 <NextSeo
      title="Selamat Datang di zmbpediabogor"
      description="Toko aneka macam tanaman hias"
      canonical="https://zmbpediabogor.store/"
      openGraph={{
        url: "https://zmbpediabogor.store/",
        title: "Selamat Datang di zmbpediabogor",
        description: "Toko aneka macam tanaman hias",
        images: [
          {
            url: "https://zmbpediabogor.store/assets/img/logo.png",
            width: 600,
            height: 315,
            alt: "zmbpediabogor",
          }
        ],
        site_name: 'zmbpediabogor',
      }}
    />

		
<section className="bannerBlockHolder position-relative">

				<Slider {...settings}>
						{this.props.shows.map((a, index) => (
					<div>
				
						<div className="align w-100 d-flex align-items-center bgCover" style={{background: `url(${a.gambar})`,	backgroundSize: `cover`,
															backgroundPosition: `center`}}>
															<div className="overl" style={{background:'rgba(255,255,255, .5)'}}></div>
							<div className="container position-relative holder pt-xl-10">
								<div className="row">
									<div className="col-12 col-xl-7">
										<div className="txtwrap pr-xl-10">
											<span className="title d-block text-uppercase fwEbold position-relative pl-2 mb-md-5 mb-sm-3">{a.mini}</span>
											<h1 className="fwEbold position-relative mb-md-7 mb-sm-4"><span className="text-break d-block">{a.desk}</span></h1>
										 
										</div>
									</div>
								</div>
							</div>
						</div>


					</div>
			 ))}
				</Slider>
			 
			</section>
	 

				<section className="featureSec container overflow-hidden pt-xl-12 pb-xl-9 pt-lg-10 pb-lg-4 pt-md-8 pb-md-2 pt-5">
					<div className="row">
						<header className="col-12 mainHeader mb-4 text-center">
							<h1 className="headingIV playfair fwEblod mb-4">
								Produk Baru
							</h1>
							<span className="headerBorder d-block mb-5">
								<img
									src="/assets/img/hbdr.png"
									alt="Header Border"
									className="img-fluid img-bdr"
								/>
							</span>
							<p>Beberapa koleksi tanaman hias terbaru</p>
						</header>
					</div>
					<div className="row">
						{this.props.show.map((a, index) => (
							<div className="col-12 col-sm-6 col-lg-3 featureCol position-relative mb-6">
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
									<div class="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
										<span class="title d-block mb-2">
											<Link 
											href="/produk/[id]/[product]"
											as={`/produk/${a.id}/${a.namaproduk.replace(/\s/g,"-")}`}
											>
												<a>{truncate(a.namaproduk)}</a>
											</Link>
										</span>
										<span className="price d-block fwEbold">
											{a.harga}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>
			</Layout>
		);
	}
}