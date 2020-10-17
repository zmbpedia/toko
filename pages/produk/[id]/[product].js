import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { NextSeo } from 'next-seo';
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
			"https://zmbpediabogor.store/api/productdata/" + id + "/" + product
		);
		const show = await res.json();
        let gambarnya ='';
    	let linknya ='';
    	let titlehead='Maaf tidak ada produk'
    	let des = ''
    	let harganya = ''
    	if(show.length){

    	titlehead = 'zmbpediabogor |'+ await show[0].namaproduk+ '- Detail produk'
             if(await show[0].harga){
                   harganya = ' - dikisaran harga Rp. ' + await show[0].harga
             }else{
             	 harganya =' - untuk harga silahkan hubungi admin di nomer hotline kami ' 
             }

    	des = await show[0].deskripsi + harganya
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
				"https://zmbpediabogor.store/produk/" +
				this.props.id +
				"/" +
				this.props.product,

			titlex: this.props.product + " - Detail produk",
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
        site_name: 'zmbpediabogor',
      }}
    />


				<style jsx>{`
			   .border{  border: 1px solid #dee2e6!important}
          .overl{
            width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(255,255,255, .5);
          }
.main-content-wrapper {
  margin-top: 100px;
  margin-bottom: 100px;
}
.img-eror{
              font-size: 130px;
    text-align: center;
    width: 100%;
}
				`}</style>
				







<section className="introBannerHolder d-flex w-100 bgCover" style={{
                              background: `url(${this.props.gambarnya})`,
                              backgroundSize: `cover`,

                              backgroundPosition: `center`,
                            }}
                            >
                            <div className="overl" style={{background:'rgba(255,255,255, .8)'}}></div>  
        <div className="container">
          <div className="row">
            <div className="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
              <h1 className="headingIV fwEbold playfair mb-4"> Detail Produk</h1>
              <ul className="list-unstyled breadCrumbs d-flex justify-content-center">
                <li className="mr-2"><a href="https://zmbpediabogor.store/">Beranda</a></li>
                <li className="mr-2">/</li>
                <li className="active">detail produk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>




					{this.state.in === "yes" ? (
						<h1></h1>
					) : (
<>
					       <div className="img-eror icon icon-plant"></div>
						<h1
							style={{
								textAlign: "center",
								paddingTop: "100px",
								paddingBottom: "100px",
							}}
						>
							Maaf produk tidak ditemukan
						</h1>
						</>
					)}
					{this.state.productdata.map((a) => (
						
			<div className="twoColumns container pt-xl-23 pb-xl-20 pt-lg-20 pb-lg-20 py-md-16 py-10">
				<div className="row mb-6">
					<div className="col-12 col-lg-6 order-lg-1">		
						<div className="productSliderImage mb-lg-0 mb-4">
							<div>
								<img src="http://placehold.it/570x635" alt="image description" className="img-fluid w-100">
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6 order-lg-3">
				
						<div className="productTextHolder overflow-hidden">
							<h2 className="fwEbold mb-2">Pellentesque aliquet</h2>
						
							<strong className="price d-block mb-5 text-green">65.00 $</strong>
							<p className="mb-5">Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem ullamcorper volutpat. Vestibulum lacinia risus.</p>						
							<ul className="list-unstyled socialNetwork d-flex flex-wrap mb-sm-11 mb-4">
								<li className="text-uppercase mr-5">SHARE THIS PRODUCT:</li>
								<li className="mr-4"><a href="javascript:void(0);" className="fab fa-facebook-f"></a></li>
								<li className="mr-4"><a href="javascript:void(0);" className="fab fa-pinterest-p"></a></li>
								<li className="mr-4"><a href={"https://www.instagram.com/?url=this.state.urls"} className="fab fa-instagram-i" target="_blank" rel="noopener">
                        
</a></li>
							</ul>
					
						</div>
					</div>
				</div>
			
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
				
						<ul className="list-unstyled tabSetList d-flex justify-content-center mb-9">
							<li className="mr-md-20 mr-sm-10 mr-2">
								<a href="#tab1-0" className="active playfair fwEbold pb-2">Description</a>
							</li>
						
						</ul>
			
						<div className="tab-content mb-xl-11 mb-lg-10 mb-md-8 mb-5">
							<div id="tab1-0" className="active">
								<p>Aenean id ullamcorper libero. Vestibulum imperdiet nibh. Lorem ullamcorper volutpat. Vestibulum lacinia risus. Etiam sagittis ullamcorper volutpat. Vestibulum lacinia risus sed ligula malesuada volutpat.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
					))}
			 
			</Layout>
		);
	}
}