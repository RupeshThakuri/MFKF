import React from 'react';
import Blog from "@/components/Blog/Blog";
import Breadcrumbs from '@/breadcrumbs/breadcrumbs';

function Blogs() {
    return (
        <div>
            <Breadcrumbs title="Blogs Gallery And Members" />
            <Blog />
        </div>
    )
}

export default Blogs
