import Layout from "../../components/layout";
import fetch from "isomorphic-unfetch";
import React from "react";
import Link from "next/link";
import { default as minifyCssString } from "minify-css-string";
import { NextSeo } from "next-seo";

function truncate(str) {
	return str.length > 40 ? str.substring(0, 60) + "..." : str;
}
export default class About extends React.Component {
	constructor() {
		super();
		this.state = {
			imageIndex: 0,
			about: [],
			img: "",
		};
	}

	static async getInitialProps({ query }) {
		const { nama } = query;
		const res = await fetch("https://plant29.store/api/caridata/" + nama);
		const datas = await res.json();
		var cro = "";
		if (datas.length) {
			cro = "https://plant29.store/cari/" + this.props.nama;
		}
		return { datas, nama, cro };
	}
	componentDidMount() {}
	render() {
		const cssString = `
.product-gallery__image {
        width: 100%;
        height:500px;
       border-radius: 100%;
}
.product-gallery__large-image {
  padding-left:0px !important;
}

.listname li {
  padding-top: 20px;
}
 .product-main-details {
  margin-left: 0;
 }
.breadcrumb {
    background-color: none !important;
}
 .breadcrumb li {
    font-size: 15px;

 }
 .higlight {
 	background-color: yellow;
 	padding: 3px;
 }
 .img {
 	width:100px;
 	height: 100px;
 	border-radius: 5px;
 	position: relative;
 }
 .cont {
position: relative;
margin-top: 30px;
margin-bottom: 30px;
 }
 .textname{
 	    position: absolute;
    top: 0;
    left: 150px;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 5px;
 }
 .pa {
 	padding-top:5px;
 	margin-bottom: 0;
 }
 .notfon {
 	    font-size: 15px;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
 }
@media only screen and (max-width: 999px) {

.product-gallery__image {
    width: 100%;
    height: 500px;
    border-radius: 0;
}

}
    `;
		return (
			<Layout>
				<NextSeo
					title="Plant29 - Search Result Page"
					description="Best place to find some decorative plants"
					canonical={this.props.cro}
					openGraph={{
						url: this.props.cro,
						title: "Plant29 - Search Result Page",
						description:
							"Find some best decorative plants in our catalog product",
						site_name: "plant29",
					}}
				/>

				<style
					dangerouslySetInnerHTML={{
						__html: minifyCssString(cssString),
					}}
				/>

				<section
					class="page-title-area bg-color"
					data-bg-color="#f4f4f4"
					style={{
						backgroundColor: "rgb(244, 248, 250)",
						paddingTop: "150px",
					}}
				>
					<div class="container">
						<div class="row">
							<div class="col-12 text-center">
								<h1 class="page-title">SEARCH RESULT</h1>
								<ul
									class="breadcrumb"
									style={{ backgroundColor: "transparent" }}
								>
									<li>
										<a href="/">Home</a>
									</li>
									<li class="current">
										<span>Search Result</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<div class="container">
					<div class="row">
						<div class="col-12">
							{this.props.datas.data.length ? (
								""
							) : (
								<p className="notfon">
									Result Not found Whit keyword{" "}
									<b>{this.props.nama}</b>
								</p>
							)}
							{this.props.datas.data.map((a) => (
								<div className="cont">
									<Link
										href="/product/[id]/[product]"
										as={`/product/${
											a.id
										}/${a.namaproduks.replace(/\s/g, "-")}`}
									>
										<a>
											<div
												className="img"
												style={{
													background: `url(${a.gambar})`,
													backgroundSize: `cover`,
													backgroundPosition: `center`,
												}}
											></div>
										</a>
									</Link>
									<div className="textname">
										<div
											dangerouslySetInnerHTML={{
												__html: a.namaproduk,
											}}
										></div>
										<p className="pa">{a.deskripsi}</p>
										<p className="pa">{a.harga} USD</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}