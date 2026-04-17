export const SAFARI_DATA10 = {
    hero: {
        tag: "Expedition Series",
        title: "KITE SAFARI:",
        highlight: "NORTHERN PERU",
        description: "A journey through the windiest coastline on Earth. Join our guided expedition through the hidden gems of the Peruvian desert."
    },
    requirements: {
        title: "Rider Requirements",
        description: "This safari is designed for Intermediate to Advanced riders to ensure a safe and thrilling experience across Peru's demanding spots.",
        items: [
            { icon: "verified", title: "Independent Kiting", desc: "Full independence in setting up, launching, and self-rescue in varying conditions." },
            { icon: "arrow_upward", title: "Upwind Proficiency", desc: "Consistent ability to ride upwind and hold ground in moderate to strong winds." },
            { icon: "water", title: "Basic Wave Experience", desc: "Comfortable navigating small to medium waves and basic understanding of etiquette." }
        ]
    },
    timeline: [
        { id: "01", title: "Early Swell Check", desc: "First light assessment of conditions and spot planning.", icon: "explore" },
        { id: "02", title: "Breakfast View", desc: "Fueling up with local produce overlooking the break.", icon: "restaurant" },
        { id: "03", title: "Morning Session", desc: "Hitting the water in Pacasmayo as the thermal winds build.", icon: "kitesurfing", active: true },
        { id: "04", title: "Downwinder", desc: "Guided coastal run to the next pristine spot.", icon: "route" },
        { id: "05", title: "Sunset Bonfire", desc: "Reviewing footage and unwinding under the stars.", icon: "local_fire_department" }
    ],
    spots: [
        { 
            name: "Pacasmayo", 
            tag: "The Longest Wave", 
            desc: "Legendary for its endlessly peeling left-handers, offering rides that can last for minutes.",
            colSpan: "md:col-span-8 md:row-span-2"
        },
        { 
            name: "Lobitos", 
            tag: "Pure Perfection", 
            desc: "A perfect hollow left hand wave breaking over a shallow sandbar.",
            colSpan: "md:col-span-4 md:row-span-1"
        },
        { 
            name: "Mancora", 
            tag: "Vibrant Wind", 
            desc: "Warmer waters, consistent thermals, and an energetic post-session atmosphere.",
            colSpan: "md:col-span-4 md:row-span-1"
        }
    ]
};