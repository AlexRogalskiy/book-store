import Banner from "@/app/components/Banner";
import TopSellers from "@/app/components/TopSellers";

export const metadata = {
    title: "Book Store",
    description: "Home page",
}

export default function Home() {
    return (
        <>
            <Banner/>
            <TopSellers/>
        </>
    );
}
