import fetch from "isomorphic-unfetch";
export default class Slide extends React.Component {
	static async getInitialProps() {
		const res = await fetch("https://zmbpediabogor.my.id/api/slide");
		const show = await res.json();

		console.log(show)
		return { show };
	}

    render() {
        return (
            <>
	<section className="bannerBlockHolder position-relative">
				<div className="slick-fade">
					<div>
						{this.props.show.map((a, index) => (
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
	 
            </>
        );
    }
}
