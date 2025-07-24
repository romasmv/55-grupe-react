import { useParams } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Error404() {
    let { '*': splat } = useParams();

    return (
        <>
            <main>
                ERROR 404 PAGE - {splat}
            </main>
        </>
    );
}