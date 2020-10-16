import Foot from "./footer";
import Nav from "./nav";
const Layout = (props) => {
    return (
        <>
            <Nav />
            <div>{props.children}</div>
            <Foot />
        </>
    );
};
export default Layout;