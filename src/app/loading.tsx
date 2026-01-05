export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-4">
                {/* Animated Logo Pulse */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-t-2 border-white rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-t-2 border-zinc-500 rounded-full animate-spin direction-reverse"></div>
                </div>
                <p className="text-zinc-400 text-sm animate-pulse">Loading...</p>
            </div>
        </div>
    )
}
