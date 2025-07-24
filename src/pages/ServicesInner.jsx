import { useParams } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function ServiceInner() {
    const { service } = useParams();

    return (
        <>
            <main>
                SERVICE INNER PAGE - {service}
            </main>
        </>
    );
}