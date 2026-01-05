import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
            <Header />

            <main className="flex-grow flex items-center justify-center relative z-10 p-6">
                {/* Background Ambience */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="text-center max-w-md mx-auto">
                    <h1 className="text-9xl md:text-[12rem] font-bold text-white mb-6 leading-none tracking-tighter">404</h1>
                    <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
                    <p className="text-zinc-400 mb-8">
                        The page you are looking for doesn't exist or has been moved.
                        Let's get you back on secure ground.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="/">
                            <Button className="bg-white text-black hover:bg-zinc-200">Return Home</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">Contact Support</Button>
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
