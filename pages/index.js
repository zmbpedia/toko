import Layout from "../components/layout"; 
import fetch from "isomorphic-unfetch";
import React from "react";
import Link from "next/link";
 
function truncate(str) {
	return str.length > 10 ? str.substring(0, 20) + "..." : str;
}
export default class Home extends React.Component {
	static async getInitialProps() {
		const res = await fetch(
			"https://zmbpediabogor.store/api/homie"
		);
		const show = await res.json();
		return { show };
	}

	render() {
		return (
			<Layout>
				<style jsx>{`
				#wax-img {
    max-width: 100%;
    height: 250px !important;
    object-fit: cover;
}

            
				`}</style>
			  	<section class="featureSec container overflow-hidden pt-xl-12 pb-xl-9 pt-lg-10 pb-lg-4 pt-md-8 pb-md-2 pt-5">
				<div class="row">
				 
					<header class="col-12 mainHeader mb-4 text-center">
						<h1 class="headingIV playfair fwEblod mb-4">Produk baru</h1>
						<span class="headerBorder d-block mb-5"><img src="/asset/img/hbdr.png" alt="Header Border" class="img-fluid img-bdr" /></span>
						<p>Beberapa koleksi tanaman hias terbaru</p>
					</header>
				</div>
				<div class="row">
				{this.props.show.map((a, index) => (

					<div class="col-12 col-sm-6 col-lg-3 featureCol position-relative mb-6">
						<div class="border">
							<div class="imgHolder position-relative w-100 overflow-hidden">
								<img src={a.gambar} style={{'height': '300px', 'objectFit': 'cover', 'width': '100%'}} id="wax-img" alt={a.namaproduk} class="img-fluid" />
							</div>
							<div class="text-center py-xl-5 py-sm-4 py-2 px-xl-2 px-1">
								<span class="title d-block mb-2">

									<Link
																href="/product/[id]/[product]"
																as={`/product/${a.id}/${a.namaproduk.replace(/\s/g,"-")}`}
															>
																<a>
																	{truncate(
																		a.namaproduk
																	)}
																</a>
															</Link>

								</span>
								<span class="price d-block fwEbold">{a.harga}</span>
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