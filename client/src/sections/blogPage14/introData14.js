export const CHOICE_DATA14 = {
    hero: {
        tagKey: "blogWingVsKite.hero.tag",
        titleKey: "blogWingVsKite.hero.title",
        highlightKey: "blogWingVsKite.hero.highlight",
        descriptionKey: "blogWingVsKite.hero.description",
        anchors: [
            { labelKey: "blogWingVsKite.hero.anchors.0.label", value: "18-20°C", subKey: "blogWingVsKite.hero.anchors.0.sub" },
            { labelKey: "blogWingVsKite.hero.anchors.1.label", value: "15-25", unit: "kts", subKey: "blogWingVsKite.hero.anchors.1.sub" }
        ]
    },
    factors: [
        {
            id: "wind",
            icon: "air",
            labelKey: "blogWingVsKite.factors.0.label",
            titleKey: "blogWingVsKite.factors.0.title",
            descKey: "blogWingVsKite.factors.0.desc",
            zones: [
                { nameKey: "blogWingVsKite.factors.0.zones.0.name", value: "12-18 kts", color: "border-t-[#5af8fb]/50 text-[#5af8fb]" },
                { nameKey: "blogWingVsKite.factors.0.zones.1.name", value: "18-25+ kts", color: "border-t-[#ff9069]/50 text-[#ff9069]" }
            ],
            image: "kite-tension-bar.jpg"
        },
        {
            id: "waves",
            icon: "tsunami",
            labelKey: "blogWingVsKite.factors.1.label",
            titleKey: "blogWingVsKite.factors.1.title",
            descKey: "blogWingVsKite.factors.1.desc",
            image: "pacasmayo-waves-aerial.jpg",
            isReversed: true
        }
    ],
    progression: {
        titleKey: "blogWingVsKite.progression.title",
        descKey: "blogWingVsKite.progression.desc",
        cards: [
            { 
                titleKey: "blogWingVsKite.progression.cards.0.title", 
                color: "bg-[#5af8fb]", 
                textKey: "blogWingVsKite.progression.cards.0.text" 
            },
            { 
                titleKey: "blogWingVsKite.progression.cards.1.title", 
                color: "bg-[#ff9069]", 
                textKey: "blogWingVsKite.progression.cards.1.text" 
            }
        ]
    }
};