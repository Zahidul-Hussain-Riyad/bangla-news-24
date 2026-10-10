import Link from 'next/link';

const NavLinks = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const navs = data.data;  
    console.log(navs);

    return (
        <div className="flex gap-5 justify-center">
            {navs.map((n : { title: string; slug: string }, i: number) => (
                <Link key={i} href={`/category/${n.slug}`}>
                    {n.title}
                </Link>
            ))}
        </div>
    );
};

export default NavLinks;