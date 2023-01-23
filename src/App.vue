<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const tones = [
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
</script>

<template>
    <div class="bg-slate-100">
        <div class="flex flex-col items-center w-full">
            <!--
            - job title ✅
            - job description ✅
            - upload resume
            - choose tone ✅
            - additional information

         -->
            <div>
                <h1 class="py-10 text-2xl font-bold">Cover Letter Generator</h1>
            </div>

            <div class="w-full md:w-5/6 my-10">
                <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                        <label for="job-title" class="block text-sm font-medium text-gray-700">Job Title</label>
                        <input type="text" name="job-title" id="job-title" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="company-name" class="block text-sm font-medium text-gray-700">Company name</label>
                        <input
                            type="text"
                            name="company-name"
                            id="company-name"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div class="mt-2 space-y-4 col-span-6">
                        <!-- h element with text "Tone" -->
                        <h3 class="text-base font-medium leading-6 text-gray-700">Tone</h3>
                        <div class="flex items-start" v-for="tone in tones" :key="tone.emoji">
                            <div class="flex h-5 items-center">
                                <input :id="`tone-${tone.name}`" name="tone" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            </div>
                            <div class="ml-3 text-sm">
                                <label :for="`tone-${tone.name}`" class="font-medium text-gray-700">{{ tone.emoji + " " + tone.name }}</label>
                                <p class="text-gray-500">{{ tone.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <label for="job-description" class="block text-sm font-medium text-gray-700">Job Description</label>
                        <div class="mt-1">
                            <textarea
                                id="job-description"
                                name="job-description"
                                rows="3"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                        <p class="mt-2 text-sm text-gray-500">Copy the whole job description and paste it in here</p>
                    </div>
                    <div class="col-span-6">
                        <label for="resume" class="block text-sm font-medium text-gray-700">Resume</label>
                        <div class="mt-1">
                            <textarea
                                id="resume"
                                name="resume"
                                rows="3"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                        <p class="mt-2 text-sm text-gray-500">Copy & Paste your resume here, don't waste your time formatting. ChatGPT doesn't give a shit 😂</p>
                    </div>
                    <div class="col-span-6">
                        <label for="additional information" class="block text-sm font-medium text-gray-700">Additional Information 🔥</label>
                        <div class="mt-1">
                            <textarea
                                id="additional information"
                                name="additional information"
                                rows="3"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="my years of experience: 4
my name: Clarance Liberi"
                            />
                        </div>
                        <p class="mt-2 text-sm text-gray-500">
                            This is the important section, this will make your coverlet unique, include some info that AI could hadly detect. like total years of experience, your full names, preferred
                            names or any fkn thing
                        </p>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        type="submit"
                        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
