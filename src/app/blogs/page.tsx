import React from 'react';
import Blog from "@/components/Blog/Blog";
import Breadcrumbs from '@/breadcrumbs/breadcrumbs';
import { Metadata } from 'next';


export const metadata:Metadata = {
    title: "MFKF - Blog Page",
    description: "See Our Recent Activities",
};

function Blogs() {
    return (
        <div>
            <Breadcrumbs title="Blogs Gallery And Members" />
            <Blog />
        </div>
    )
}

export default Blogs
