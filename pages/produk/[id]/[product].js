import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { NextSeo } from 'next-seo';
import { CopyToClipboard } from "react-copy-to-clipboard";
import fetch from "isomorphic-unfetch";
import { useAmp } from 'next/amp';
export default class Product extends React.Component {
	constructor() {
		super();
		this.state = {
			productdata: [],
			in: "",
			urls: "",
			deskrips: "",
			titlex: "",
		};
	}
	static async getInitialProps({ query }) {
		const { id, product } = query;
		const res = await fetch(
			"https://plant29.store/api/productdata/" + id + "/" + product
		);
		const show = await res.json();
        let gambarnya ='';
    	let linknya ='';
    	let titlehead='no product found'
    	let des = ''
    	if(show.length){

    	titlehead = 'Plant29 |'+ await show[0].namaproduk+ '- Product Detail Page'
    	des = await show[0].deskripsi + '- price @ ' + await show[0].harga +'USD'
    	gambarnya = await show[0].gambar;
    	linknya = await show[0].cronical;

 		 }
		return { show, product, id, gambarnya, linknya, titlehead, des};
	}

	componentDidMount() {
		var myArray = [];
		var ulr = window.location.href;
		this.setState({
			urls:
				"https://plant29.store/product/" +
				this.props.id +
				"/" +
				this.props.product,

			titlex: this.props.product + " - Product Detail",
		});
		for (var i = 0; i < this.props.show.length; i++) {
			var value = this.props.show[i];
			var num = value["id"];
			var namaproduk = value["namaproduk"];
 


			var hargaproduk = value["harga"];
			var gambar = value["gambar"];
			var deskripsi = value["deskripsi"];
			var on = value["stok"];
			var stokis = value["stokproduk"];
			var stok;
			if (on) {
				stok = "sale";
			} else {
				stok = "out of stock";
			}

			this.setState({ deskrips: deskripsi, img: gambar });

			myArray.push({
				id: num,
				nama: namaproduk,
				gambar: gambar,
				harga: hargaproduk,
				deskrip: deskripsi,
				stok: stok,

				stokis: stokis,
			});
		}

		if (myArray.length) {
			this.setState({ productdata: myArray, in: "yes" });
		} else {
			this.setState({ in: "no" });
		}
	}

	render() {
		return (
			<Layout>






 <NextSeo
      title={this.props.titlehead}
      description={this.props.des}
      canonical={this.props.linknya}
      openGraph={{
        url: this.props.linknya,
        title: this.props.titlehead,
        description: this.props.des,
        images: [
          {
            url: this.props.gambarnya,
            width: 800,
            height: 600,
            alt: this.props.product,
          },
          {
            url: this.props.gambarnya,
            width: 900,
            height: 800,
             alt: this.props.product,
          }
        ],
        site_name: 'plant29',
      }}
    />


				<style jsx>{`
					.product-gallery__image {
						width: 100%;
						height: 500px;
					}

					.product-gallery__large-image {
						padding-left: 0px !important;
					}
					.product-summary .product-title {
						font-weight: bold;
					}
					.share {
						margin-bottom: 50px;
						padding: 10px;
						border-radius: 10px;
						border: 3px solid;
						font-size: 15px;
					}
					.breadcrumb {
						background-color: none !important;
					}
					.breadcrumb li {
						font-size: 15px;
					}
					#nav-description-tab {
						background-color: #495057;
						padding: 20px;
						font-size: 20px;
						color: #fff;
					}

					.product-description p {
						font-size: 15px;
					}
					a:hover {
						text-decoration: none !important;
					}
					.product__title {
						font-weight: bold;
						color: #000;
					}
					.img-eror {
						background: url(/assets/img/eror.png);
    position: relative; 
    top: 50px;
    width: 100%;
    height: 100px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin: 30px auto;
					}
				`}</style>
				<div className="main-content-wrapper">
					<section
						className="page-title-area bg-color"
						data-bg-color="#f4f4f4"
						style={{
							backgroundColor: "rgb(244, 248, 250)",
							paddingTop: "150px",
						}}
					>
						<div className="container">
							<div className="row">
								<div className="col-12 text-center">
									<h1 className="page-title">
										Detail Product
									</h1>
									<ul
										className="breadcrumb"
										style={{
											backgroundColor: "transparent",
										}}
									>
										<li>
											<a href="/">Home</a>
										</li>
										<li className="current">
											<span>Detail Product</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					{this.state.in === "yes" ? (
						<h1></h1>
					) : (
<>
					       <div className="img-eror"></div>
						<h1
							style={{
								textAlign: "center",
								paddingTop: "100px",
								paddingBottom: "100px",
							}}
						>
							Product Not Found
						</h1>
						</>
					)}
					{this.state.productdata.map((a) => (
						<div className="page-content-inner pt--80 pt-md--60">
							<div className="container">
								<div className="row no-gutters mb--80 mb-md--57">
									<div className="col-lg-7 product-main-image">
										<div className="product-image">
											<div className="product-gallery vertical-slide-nav">
												<div className="product-gallery__large-image mb-sm--30">
													<div className="product-gallery__wrapper">
														<div className="element-carousel main-slider image-popup">
															<div className="item">
																<CopyToClipboard
																	text={
																		this
																			.state
																			.urls
																	}
																>
																	<button className="share">
																		share
																		this
																		product
																	</button>
																</CopyToClipboard>
																<figure
																	className="product-gallery__image zoom"
																	style={{
																		background: `url(${a.gambar})`,
																		backgroundSize: `cover`,
																		backgroundPosition: `center`,
																	}}
																>
																	<span className="product-badge sale">
																		{a.stok}
																	</span>
																</figure>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-xl-4 offset-xl-1 col-lg-5 product-main-details mt-md--50">
										<div className="product-summary pl-lg--30 pl-md--0">
											<h3 className="product-title mb--20">
												{a.nama}
											</h3>
											<p className="product-short-description mb--20">
												{a.deskrip}
											</p>
											<div className="product-price-wrapper mb--25">
												<span className="money">
													${a.harga}
												</span>

												<p
													style={{
														paddingTop: "30px",
													}}
												>
													{a.stokis}
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="row justify-content-center mb--77 mb-md--57">
									<div className="col-12">
										<div className="tab-style-1">
											<div
												className="nav nav-tabs mb--35 mb-sm--25"
												id="product-tab"
												role="tablist"
											>
												<a
													className="nav-link active"
													id="nav-description-tab"
													data-toggle="tab"
													href="#"
													role="tab"
													aria-selected="true"
												>
													<span>Description</span>
												</a>
											</div>
											<div
												className="tab-content"
												id="product-tabContent"
											>
												<div
													className="tab-pane fade show active"
													id="nav-description"
													role="tabpanel"
													aria-labelledby="nav-description-tab"
												>
													<div className="product-description">
														<p>{a.deskrip}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</Layout>
		);
	}
}