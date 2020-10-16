import Link from "next/link";
import fetch from "isomorphic-unfetch";
export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            show: [],
        };
    }

    componentDidMount() {
    
    }
    render() {
        return (
            <>
                <aside className="footerHolder overflow-hidden bg-lightGray pt-xl-23 pb-xl-8 pt-lg-10 pb-lg-8 pt-md-12 pb-md-8 pt-10">
                <div className="container">
                    <div className="row">
                       {/*<div className="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-4">
                            <h3 className="headingVI fwEbold text-uppercase mb-7">Kontak kami</h3>
                            <ul className="list-unstyled footerContactList mb-3">
                                <li className="mb-3 d-flex flex-nowrap pr-xl-20 pr-0"><span className="icon icon-place mr-3"></span> <address className="fwEbold m-0">Address: London Oxford Street, 012 United Kingdom.</address></li>
                                <li className="mb-3 d-flex flex-nowrap"><span className="icon icon-phone mr-3"></span> <span className="leftAlign"> <a href="javascript:void(0);">(+032) 3456 7890</a></span></li>
                                <li className="email d-flex flex-nowrap"><span className="icon icon-email mr-2"></span> <span className="leftAlign"> <a href="javascript:void(0);">Botanicalstore@gmail.com</a></span></li>
                            </ul>
                            <ul className="list-unstyled followSocailNetwork d-flex flex-nowrap">
                                <li className="fwEbold mr-xl-11 mr-md-8 mr-3">Ikuti kami:</li>
                                <li className="mr-xl-6 mr-md-5 mr-2"><a href="javascript:void(0);" className="fab fa-facebook-f"></a></li>
                                <li className="mr-xl-6 mr-md-5 mr-2"><a href="javascript:void(0);" className="fab fa-instagram"></a></li>
                               
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 pl-xl-14 mb-lg-0 mb-4">
                            <h3 className="headingVI fwEbold text-uppercase mb-6">Informasi</h3>
                            <ul className="list-unstyled footerNavList">
                                <li className="mb-1"><a href="javascript:void(0);">New Products</a></li>
                                <li className="mb-2"><a href="javascript:void(0);">Top Sellers</a></li>
                                <li className="mb-2"><a href="javascript:void(0);">Our Blog</a></li>
                                <li className="mb-2"><a href="javascript:void(0);">About Our Shop</a></li>
                                <li><a href="javascript:void(0);">Privacy policy</a></li>
                            </ul>
                        </div>
                    */}
                       
                    </div>
                </div>
            </aside>
  

        <footer id="footer" className="overflow-hidden bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-12 copyRightHolder v-II text-center pt-md-3 pb-md-4 py-2">
                        <p className="mb-0">2020 zmbpediabogor</p>
                    </div>
                </div>
            </div>
        </footer>
            </>
        );
    }
}