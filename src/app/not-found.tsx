// import Link from "next/link";
// import GoBackButton from "@/components/GoBackButton";

// const NotFound = () => {
//     return (
//         <div className="min-h-[80vh] flex items-center justify-center bg-red-50 px-4">
//             <div className="w-full max-w-lg rounded-2xl border border-red-100 bg-white p-8 text-center shadow-xl sm:p-12">

//                 <div className="mb-5 inline-flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
//                     <span className="text-4xl font-extrabold text-red-700">
//                         404
//                     </span>
//                 </div>

//                 <h1 className="text-3xl font-extrabold text-red-800 sm:text-4xl">
//                     Page Not Found!
//                 </h1>

//                 <p className="mt-4 leading-7 text-gray-600">
//                     Oops! The page you are looking for might have been
//                     removed, had its name changed, or is temporarily unavailable.
//                 </p>

//                 <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
//                     <Link
//                         href="/"
//                         className="rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-red-800"
//                     >
//                         Back to Home
//                     </Link>

//                     <button
//                         onClick={() => window.history.back()}
//                         className="rounded-lg border border-red-200 bg-white px-6 py-3 font-semibold text-red-700 transition duration-300 hover:bg-red-50"
//                     >
//                         Go Back
//                     </button>
//                 </div>

//                 <p className="mt-8 text-sm text-red-400">
//                     Error Code: 404
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default NotFound;





import React from "react";
import Link from "next/link";
import GoBackButton from "@/components/GoBackButton";

const NotFound = () => {
    return (
        <div className="flex min-h-[80vh] items-center justify-center bg-red-50 px-4 py-10">
            <div className="w-full max-w-lg rounded-2xl border border-red-100 bg-white p-8 text-center shadow-xl sm:p-12">

                {/* 404 Icon */}
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
                    <span className="text-4xl font-extrabold text-red-700">
                        404
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl font-extrabold text-red-800 sm:text-4xl">
                    Page Not Found!
                </h1>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-600">
                    Oops! The page you are looking for might have been
                    removed, had its name changed, or is temporarily
                    unavailable.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-red-800"
                    >
                        Back to Home
                    </Link>

                    <GoBackButton />
                </div>

                {/* Footer */}
                <p className="mt-8 text-sm font-medium text-red-400">
                    Error Code: 404
                </p>
            </div>
        </div>
    );
};

export default NotFound;