import Banner from "@/app/components/Banner";
import TopSellers from "@/app/components/TopSellers";
import Recommended from "@/app/components/Recommended";

export const metadata = {
    title: "Book Store",
    description: "Home page",
}

export default function Home() {
    return (
        <>
            <Banner/>
            <TopSellers/>
            <Recommended/>
        </>
    );
}
