import FitLibrarySkeleton from "@/components/Hompage/FitLibrarySkeleton";


const Loading = () => {
    return (
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div>
                <div className="h-6 w-36 animate-pulse rounded bg-[#292e36]" />

                <div className="mt-3 h-4 w-72 max-w-full animate-pulse rounded bg-[#292e36]" />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <FitLibrarySkeleton key={index} />
                ))}
            </div>
        </div>
    );
};

export default Loading;