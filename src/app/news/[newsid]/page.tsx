import Image from 'next/image';
import { notFound } from 'next/navigation';

const NewsDetails = async ({params}: {params: Promise<{ newsid: string }>}) => {

    const { newsid } = await params;
    console.log("News ID:", newsid);
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsid}`);
    const data = await res.json();
    console.log("API Data:", data);
    const news = data.data;

    if(!news) {
        notFound()
    }

    return (
        <div>
            <h1>
                {news.title}
            </h1>

            {/* Image */}
            <Image 
                height={600}
                width={600}
                src={news.imageUrl}
                alt={news.imageAlt}/>

            <p>
                {news.text}
            </p>
        </div>
    );
};

export default NewsDetails;