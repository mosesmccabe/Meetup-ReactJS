import MainNav from "./MianNav";
import layoutStyle from "./Layout.module.css"



function Layout(props) {
    return (
        <div className={layoutStyle}> 
            <MainNav />
            <main className={layoutStyle.main}>
                {props.children}
            </main>
        </div>

    );
}

export default Layout;