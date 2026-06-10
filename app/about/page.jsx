import Hero from "@/components/about/Hero"
import OurStory from "@/components/about/story"
import Mission from "@/components/about/mission"
import WhoUse from "@/components/about/whoUse"
import CTASection from "@/components/about/CTASection"


export default function AboutPage() {
    return (
        <main >

            {/* ---------- HERO ---------- */}
            <Hero />

            {/* ---------- STORY ---------- */}
            <OurStory />

            {/* ---------- MISSION & VALUES ---------- */}
            <Mission/>

            {/* ---------- WHO IT’S FOR ---------- */}
            <WhoUse/>

            {/* ---------- CTA ---------- */}
            <CTASection/>
        </main>
    )
}
