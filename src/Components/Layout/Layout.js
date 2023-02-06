import './Layout.css';
const Layout = (props) => {
   return(
       <div className="layout w-90 mx-auto">
           {props.children}
       </div>
   )
 }
 export default Layout;