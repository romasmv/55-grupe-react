import { Outlet } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function PublicTemplates() {
    return(
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
    )
}