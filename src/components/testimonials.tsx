import { Marquee } from "@/components/magicui/marquee"
import Link from "next/link"
import Image from "next/image"

const testimonials = [
    {
        name: "Arjun Mehta",
        body: "DevGuardian's AI agents completely transformed our customer support. Response times dropped by 60% overnight.",
        img: "/clients/client-1.webp",
    },
    {
        name: "Sara Lin",
        body: "The cybersecurity audit was thorough and insightful. They found vulnerabilities we had no idea existed.",
        img: "/clients/client-2.webp",
    },
    {
        name: "Devon Carter",
        body: "Our new web application is blazing fast and secure. The team delivered exactly what we needed, on time.",
        img: "/clients/client-3.webp",
    },
    {
        name: "Priya Shah",
        body: "Implementing their AI automation workflows saved our team 20 hours a week. Highly recommended.",
        img: "/clients/client-4.webp",
    },
    {
        name: "Leo Martin",
        body: "Best web development agency we've worked with. The code quality is top-notch and the design is stunning.",
        img: "/clients/client-5.webp",
    },
    {
        name: "Chloe Winters",
        body: "Their security-first approach gave us peace of mind. We know our user data is safe with DevGuardian.",
        img: "/clients/client-6.webp",
    },
    {
        name: "Ayaan Malik",
        body: "The AI integration was seamless. It feels like magic how it handles complex tasks automatically.",
        img: "/clients/client-7.webp",
    },
    {
        name: "Monica Reeves",
        body: "Professional, knowledgeable, and reliable. DevGuardian is our go-to partner for all tech needs.",
        img: "/clients/client-8.webp",
    },
    {
        name: "James Roy",
        body: "From concept to deployment, the web dev process was smooth. The final product exceeded our expectations.",
        img: "/clients/client-9.webp",
    },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const TestimonialCard = ({
    img,
    name,
    body,
}: {
    img: string
    name: string
    body: string
}) => {
    return (
        <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-black/80 backdrop-blur-md p-10 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
            <div className="text-white/90 leading-relaxed">{body}</div>

            <div className="mt-5 flex items-center gap-2">
                <Image
                    src={img || "/placeholder.svg"}
                    alt={name}
                    height={40}
                    width={40}
                    className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <div className="leading-5 font-medium tracking-tight text-white">{name}</div>
                </div>
            </div>
        </div>
    )
}

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-[540px]" data-reveal="fade-up">
                    <div className="flex justify-center"></div>
                    <h2 className="mt-5 text-center fluid-h2 font-bold mb-4 relative z-10">
                        Client Success Stories
                    </h2>

                    <p className="mt-5 relative z-10 text-center fluid-lead text-foreground/80 text-glow-dark">
                        Hear what our clients have to say <br className="block md:hidden" /> about working with us
                    </p>
                </div>

                <div className="my-16 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]" data-reveal="scale-in" data-reveal-delay="short">
                    <div>
                        <Marquee pauseOnHover vertical className="[--duration:20s]">
                            {firstColumn.map((testimonial) => (
                                <TestimonialCard key={testimonial.name} {...testimonial} />
                            ))}
                        </Marquee>
                    </div>

                    <div className="hidden md:block">
                        <Marquee reverse pauseOnHover vertical className="[--duration:25s]">
                            {secondColumn.map((testimonial) => (
                                <TestimonialCard key={testimonial.name} {...testimonial} />
                            ))}
                        </Marquee>
                    </div>

                    <div className="hidden lg:block">
                        <Marquee pauseOnHover vertical className="[--duration:30s]">
                            {thirdColumn.map((testimonial) => (
                                <TestimonialCard key={testimonial.name} {...testimonial} />
                            ))}
                        </Marquee>
                    </div>
                </div>

                <div className="-mt-8 flex justify-center" data-reveal="fade-up">
                    <Link href="/contact">
                        <button
                            className="premium-button group relative inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-white/90 active:scale-95"
                        >
                            <div className="absolute inset-x-0 -top-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
                            <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-black/40 to-transparent"></div>
                            Share your experience
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
