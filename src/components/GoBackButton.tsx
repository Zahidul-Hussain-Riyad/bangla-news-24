"use client";

const GoBackButton = () => {
    return (
        <button
            onClick={() => window.history.back()}
            className="rounded-lg border border-red-200 bg-white px-6 py-3 font-semibold text-red-700 transition duration-300 hover:bg-red-50"
        >
            Go Back
        </button>
    );
};

export default GoBackButton;