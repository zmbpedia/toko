import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Notifications, { notify } from "react-notify-toast";
export default class Nav extends React.Component {
    constructor() {
        super();
        this.cari = React.createRef();
        this.state = {
            imageIndex: 0,
            kat: [],
            Show: false,
            visible: false,
            Showing: false,
        };
    }
    componentDidMount() {
        fetch("https://zmbpediabogor.store/api/kategori")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ kat: data });
            });
    }
    removeSpecialChars = (str) => {
        return str
            .replace(/(?!\w|\s)./g, "")
            .replace(/\s+/g, " ")
            .replace(/_/g, " ")
            .replace(/-/g, " ")
            .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, "$2");
    };
    cariproduct = () => {
        let text = this.removeSpecialChars(this.cari.current.value);
        if (!text) {
            alert("please check your input");
            return;
        } else {
            if (text.length < 3) {
                alert("Search text to short");
                return;
            } else {
                window.location.href = "/cari/" + this.removeSpecialChars(text);
            }
        }
    };
    componentWillUnmount() {}
    render() {
        return <>


<header id="header" className="position-relative">
            <div className="headerHolderCol pt-lg-4 pb-lg-5 py-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-4">

                        <i className="icon-call mr-2"></i>  Hotline: +62 899-5940-606
                        </div>
                        
                    </div>
                </div>
            </div>
  
            <div className="headerHolder container-fluid pt-lg-5 pb-lg-7 py-4">
                <div className="row">
                    <div className="col-6 col-sm-2">
              
                        <div className="logo">
                                  <Link href="/" to="/">
                            <a><img src="/assets/img/logo.png" alt="zmbpedia" className="img-fluid" /></a>
                            </Link>
                         
                        </div>
                    </div>
                    <div className="col-6 col-sm-10 col-lg-8 static-block">
          
                        <div className="mainHolder pt-lg-5 pt-3 justify-content-center">
                            <nav className="navbar navbar-expand-lg navbar-light p-0 pageNav2 position-static">
                                <button type="button" className="navbar-toggle collapsed position-relative" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav mx-auto text-uppercase d-inline-block">
                                        <li className="nav-item dropdown">
    <Link href="/" to="/">
                                            <a className="d-block">beranda</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="dropdown-toggle d-block" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Kategori</a>
                                            <ul className="list-unstyled text-capitalize dropdown-menu mt-0 py-0">
                                                {this.state.kat.map(
                                                                (a) => (
                                                <li className="d-block mx-0">
                                                <a href={"/kategori/" + a.idkategori + "/" + a.namakategori.replace(/\s/g, "-")}>{a.namakategori}</a>
                                                </li>
                                                   )
                                                            )}
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                                 <Link href="/produk" to="/produk">
                                            <a className="d-block">Katalog produk</a>
                                            </Link>
                                       
                                        </li>
                                        {/*<li className="nav-item dropdown">
                                            <a className="dropdown-toggle d-block" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">tentang kami</a>
                                        </li>*/}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-2">
         
                    </div>
                </div>
            </div>
        </header>
        </>;
    }
}