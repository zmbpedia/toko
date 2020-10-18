import Layout from "../../../components/layout";
import ReactPaginate from "react-paginate";
import fetch from "isomorphic-unfetch";
import { NextSeo } from 'next-seo';
import Link from "next/link";
function truncate(str) {
  return str.length > 10 ? str.substring(0, 100) + "..." : str;
}

export default class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      imageIndex: 0,
      data: [],
      offset: 0,
      perPage: 6,
      currentPage: 0,
      namekat: "",
      ada: "",
    };
    this.handlePageClick = this.handlePageClick;
  }

  static async getInitialProps({ query }) {
    const { id, category } = query;
    const res = await fetch("https://zmbpediabogor.store/api/kategoryproduct/" + id +"/"+category);
    const show = await res.json();

  let gambarnya ='';
      let linknya ='';
      let titlehead='Belum ada produk di kategori ini'
      let des = ''
      if(show.data.length){
  
      titlehead = 'zmbpediabogor | '+ await show.namatitle + ' - kategori produk'
      des =  'Koleksi Tanaman terbaik kami dari kategori ' + await show.namatitle
      gambarnya = await show.data[0].oggambar;
      linknya = await show.data[0].cronical;
    
     }
    return { show, category, id, gambarnya, linknya, des, titlehead };
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
      var kast = value["kategori"];
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
        namekat: this.props.category,
        ada: "yes"
      });
      myArray.push({
        id: num,
        nama: namaproduk,
        gambar: gambar,
        harga: harga,
        stok: stok,
        kats: kast,
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
                      
                      {/*<span className="hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8">Sale</span>*/}
                    </div>
                  </div>
                </div>
      ));

      this.setState({
        pageCount: Math.ceil(myArray.length / this.state.perPage),
        postData,
        productdata: myArray,
      });
    } else {
      this.setState({ ada: "no" });
    }
  }

  receivedData = (e) => {
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
      var kast = value["kategori"];
      var stok;

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
        kats: kast,
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
                      
                      {/*<span className="hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8">Sale</span>*/}
                    </div>
                  </div>
                </div>
    ));

    this.setState({
      pageCount: Math.ceil(myArray.length / this.state.perPage),
      postData,
      productdata: myArray,
    });
  };

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({
      currentPage: selectedPage,
      offset: offset,
    });
    this.receivedData(offset);
  };

  render() {

    const { currentPage, namekat, ada } = this.state;

 
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
            width: 600,
            height: 315,
            alt: this.props.category,
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
        <div class="container">
          <div class="row">
            <div class="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
              <h1 class="headingIV fwEbold playfair mb-4"> {this.state.namekat.replace(/\-/g, " ")}</h1>
              <ul class="list-unstyled breadCrumbs d-flex justify-content-center">
                <li class="mr-2">
                  <Link href="/" to="/">
                <a>Beranda</a>
                </Link>
                </li>
                <li class="mr-2">/</li>
                <li class="active">Kategori</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
        <div className="main-content-wrapper">
          <div className="shop-page-wrapper ptb--80">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="shop-products">
                    {ada === "no" ? (
                      <div id="non" className="row">
                   
                 <div className="img-eror icon icon-plant"></div>
                        <h1
                          style={{
                            textAlign: "center",
                            paddingTop: "100px",
                            width: "100%",
                            paddingBottom: "100px",
                          }}
                        >
                          Belum ada produk di kategori ini
                        </h1>
                      </div>
                    ) : (
                    <div>
                      <div id="prod" className="row">
                        {this.state.postData}
                      </div>
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
                        )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}