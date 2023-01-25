export type Tone = {
    name: string
    description: string
    emoji: string
}

export const tones: Tone[] = [
    {
        name: "formality",
        description: "The language and phrasing should be formal and professional, avoiding slang or informal phrases.",
        emoji: "🕴️",
    },
    {
        name: "courtesy",
        description: "Use polite and respectful language such as 'please' and 'thank you' to show that you value the recipient's time and consideration.",
        emoji: "🙏",
    },
    {
        name: "confidence",
        description: "Express confidence in your abilities and qualifications, but avoid sounding arrogant or boastful.",
        emoji: "💪",
    },
    {
        name: "enthusiasm",
        description: "Show enthusiasm for the position and the company, explain why you're excited about the opportunity and what you can bring to the role.",
        emoji: "😃",
    },
    {
        name: "conciseness",
        description: "Keep the letter concise and to the point, avoiding irrelevant information or going off on tangents.",
        emoji: "🔥",
    },
    {
        name: "specificity",
        description: "Tailor the letter to the specific job and company you're applying to, show that you've done your research and understand what the company is looking for.",
        emoji: "🔍",
    },
    {
        name: "professionalism",
        description: "Avoid using overly casual or friendly language, keep it professional throughout the letter.",
        emoji: "💼",
    },
    {
        name: "persuasiveness",
        description: "Use persuasive language to convince the employer that you are the best candidate for the job.",
        emoji: "💭",
    },
    {
        name: "honesty",
        description: "If you don't have a lot of experience or if you're changing careers, be honest about it, explain how your skills and experience align with the position.",
        emoji: "💯",
    },
    {
        name: "closing",
        description: "End the letter with a call to action that reminds the employer to contact you, and thank them for considering your application.",
        emoji: "🤝",
    },
]
