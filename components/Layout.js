import Header from './Header';
const Layout = props => (
  <>
    <Header />
    {props.children}
    <p>footer</p>
  </>
);

export default Layout;
