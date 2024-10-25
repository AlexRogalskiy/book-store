import React from "react";
import BookList from "@/app/components/BookList";

export const metadata = {
    title: "Books list"
}

interface Props {
}

const Page: React.FC<Props> = () => {

    return (
        <div>
            <BookList/>
        </div>
    )
};

export default Page;