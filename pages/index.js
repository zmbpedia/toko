import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import React from "react";
import Link from "next/link";

function truncate(str) {
	return str.length > 10 ? str.substring(0, 20) + "..." : str;
}
export default class Home extends React.Component {
	static async getInitialProps() {
		const res = await fetch("https://zmbpediabogor.store/api/homie");
		const show = await res.json();
		const slide = await fetch("https://zmbpediabogor.store/api/slide");
		const slides = await slide.json();
		return { show, slides };
	}

	render() {
		return (
			<Layout>

	<section className="bannerBlockHolder position-relative">
				<div className="slick-fade">
					<div>
						{this.props.slides.map((a, index) => (
						<div className="align w-100 d-flex align-items-center bgCover" style={{background: `url(${a.gambar})`}}>
							<div className="container position-relative holder pt-xl-10">
								<div className="row">
									<div className="col-12 col-xl-7">
										<div className="txtwrap pr-xl-10">
											<span className="title d-block text-uppercase fwEbold position-relative pl-2 mb-md-5 mb-sm-3">{a.mini}</span>
											<h1 className="fwEbold position-relative mb-md-7 mb-sm-4">Houseplant <span className="text-break d-block">{a.desk}</span></h1>
										    {a.btn}
										</div>
									</div>
								</div>
							</div>
						</div>
))}

					</div>
			 
				</div>
				<div className="slickNavigatorsWrap">
					<a href="#" className="slick-prev"><i className="icon-leftarrow"></i></a>
					<a href="#" className="slick-next"><i className="icon-rightarrow"></i></a>
				</div>
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
												as={`/product/${
													a.id
												}/${a.namaproduk.replace(
													/\s/g,
													"-"
												)}`}
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