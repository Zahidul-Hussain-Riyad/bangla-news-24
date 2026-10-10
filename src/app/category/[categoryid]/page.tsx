import NewsCard from '@/components/NewsCard';
import React from 'react';

interface CategoryNewsProps {
    params: Promise<{
        categoryid: string;
    }>;
}

const CategoryNews = async ({ params }: CategoryNewsProps) => {

    const { categoryid } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`);
    const data = await res.json();
    const categoryNews = data.data;

    if (!categoryNews || categoryNews.length === 0) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5">
                {data.title}
            </h1>

            <div className="grid grid-cols-3 gap-10">
                {categoryNews.map((news: any) => (
                    <NewsCard
                        key={news.id}
                        news={news}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryNews;