// "use client"

// const LoadingPage = () => {
//     return (
//         <div>
//             Loading.....
//         </div>
//     );
// };

// export default LoadingPage;



"use client";

const LoadingPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-red-50">
      {/* Top-left decoration */}
      <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-red-500 to-rose-300 opacity-80 blur-3xl" />

      {/* Bottom-right decoration */}
      <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-gradient-to-br from-rose-300 to-red-500 opacity-70 blur-3xl" />

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Spinner */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-red-100/60 shadow-lg shadow-red-200/40">
          <div className="h-16 w-16 animate-spin rounded-full border-[7px] border-rose-200 border-t-red-600 border-r-red-500" />

          <div className="absolute h-3 w-3 rounded-full bg-red-600" />
        </div>

        {/* Loading text */}
        <h2 className="mt-8 text-3xl font-extrabold tracking-wide text-red-700 sm:text-4xl">
          Loading
          <span className="inline-block animate-pulse">...</span>
        </h2>

        <p className="mt-3 text-sm font-medium text-rose-500 sm:text-base">
          Please wait while we prepare your news
        </p>

        {/* Animated dots */}
        <div className="mt-6 flex items-center gap-3">
          {[0, 1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className="h-3 w-3 animate-bounce rounded-full bg-red-500"
              style={{ animationDelay: `${dot * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;