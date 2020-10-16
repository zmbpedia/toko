import Layout from "../../../components/layout";
import ReactPaginate from "react-paginate";
import fetch from "isomorphic-unfetch";
import { default as minifyCssString } from "minify-css-string";
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
    const res = await fetch("https://plant29.store/api/kategoryproduct/" + id +"/"+category);
    const show = await res.json();

  let gambarnya ='';
      let linknya ='';
      let titlehead='no product category found'
      let des = ''
      if(show.data.length){
  
      titlehead = 'Plant29 | '+ await show.namatitle + ' - Category Product Page'
      des =  await show.namatitle + ' Best of our collection category'
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
        <div className="col-xl-4 col-sm-6 mb--50">
          <div className="plant29-product">
            <div className="product__inner">
              <div className="product__image">
                <figure
                  className="product__image--holder"
                  style={{
                    background: `url(${a.gambar})`,
                  }}
                ></figure>
              </div>
              <div className="product__info">
                <div className="product__info--left">
                  <h3 className="product__title">
                    <Link
                      href="/product/[id]/[product]"
                      as={`/product/${a.id}/${a.nama.replace(/\s/g, "-")}`}
                    >
                      <a>{truncate(a.nama)}</a>
                    </Link>
                  </h3>
                  <div className="product__price">
                    <span className="money"> ${a.harga}</span>
                  </div>
                </div>
              </div>
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
      <div className="col-xl-4 col-sm-6 mb--50">
        <div className="plant29-product">
          <div className="product__inner">
            <div className="product__image">
              <figure
                className="product__image--holder"
                style={{
                  background: `url(${a.gambar})`,
                }}
              ></figure>
            </div>
            <div className="product__info">
              <div className="product__info--left">
                <h3 className="product__title">
                  <Link
                    href="/product/[id]/[product]"
                    as={`/product/${a.id}/${a.nama.replace(/\s/g, "-")}`}
                  >
                    <a> {truncate(a.nama)}</a>
                  </Link>
                </h3>
                <div className="product__price">
                  <span className="money"> ${a.harga}</span>
                </div>
              </div>
            </div>
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
    const cssString = `
  .page-title-area {
    padding-top: 150px;
  }
.pagination {
  margin: 0 auto;
  font-size: 15px;
}
.breadcrumb {
    background-color: none !important;
}
 .breadcrumb li {
    font-size: 15px;

 }
.product__image--holder {
        width: 100%;
        height: 300px;
     background-size: cover !important;
                                    background-position:center  !important;
}
    a:hover {
                 text-decoration: none !important;
            }
            .product__title{
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
    `;
    console.log(this.props.gambarnya);
 
    return (
      <Layout>
        <style
          dangerouslySetInnerHTML={{
            __html: minifyCssString(cssString),
          }}
        />
 
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
        site_name: 'plant29',
      }}
    />


        <section
          className="page-title-area bg-color"
          data-bg-color="#f4f4f4"
          style={{ backgroundColor: "rgb(244, 248, 250)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1 className="page-title">
                  {this.state.namekat.replace(/\-/g, " ")}
                </h1>
                <ul
                  className="breadcrumb"
                  style={{ backgroundColor: "transparent" }}
                >
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="current">
                    <span>Plant category</span>
                  </li>
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
                   
                 <div className="img-eror"></div>
                        <h1
                          style={{
                            textAlign: "center",
                            paddingTop: "100px",
                            width: "100%",
                            paddingBottom: "100px",
                          }}
                        >
                          Product Category Not Found
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