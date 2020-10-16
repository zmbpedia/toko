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
			"https://plant29.store/api/homie"
		);
		const show = await res.json();
		return { show };
	}

	render() {
		return (
			<Layout>
			  
			</Layout>
		);
	}
}