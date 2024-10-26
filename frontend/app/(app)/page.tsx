import Banner from "@/app/components/Banner";
import TopSellers from "@/app/components/TopSellers";
import Recommended from "@/app/components/Recommended";

export const metadata = {
    title: "Book Store",
    description: "Home page",
}

export default async function Home() {
    // Fetch Top Sellers and Recommended Books in parallel
    const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/home-books`);
    const result = await response.json();
    const {recommended_books, top_seller_books} = result.data;
    console.log(recommended_books, top_seller_books);

    // Parse the JSON responses
    // const topSellers = await topSellersRes.json();
    // const recommendedBooks = await recommendedRes.json();

    return (
        <>
            <Banner/>
            <TopSellers books={top_seller_books}/>
            <Recommended/>
        </>
    );
}
