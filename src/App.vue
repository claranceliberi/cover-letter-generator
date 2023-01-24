<script setup lang="ts">
import { ChatGPTAPIBrowser } from "chatgpt"
import { computed, reactive, ref } from "vue"
import { tones } from "./data/tones"

const loading = ref(false)

const details = reactive({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    resume: "",
    tone: [],
    additionalInformation: "",
})

const prompt = computed(() => {
    return `
Assume you are a job seeker below is your RESUME, and remember """ marks the beginning and the end of the provided information.

RESUME:
"""
${details.resume}
"""

by using provided RESUME, generate a cover letter  showing interest and why you are a good fit for the following job

JOB TITLE:
"""
${details.jobTitle}
"""

COMPANY:
"""
${details.companyName}
"""

JOB DESCRIPTION:
"""
${details.jobDescription}
"""

While writing a cover letter, write it in the following tones '${details.tone.join(",")}'.

You may also consider the following info while writing the cover letter
"""
${details.additionalInformation}
"""
`
})

// const api = new ChatGPTAPIBrowser({
//     email: process.env.OPENAI_EMAIL,
//     password: process.env.OPENAI_PASSWORD,
// })

const api = new ChatGPTAPIBrowser({
    email: "liberintwari+1@gmail.com",
    password: "MKSrAFMpgZt9P2z",
})

// await api.initSession()

async function generateCoverLetter() {
    loading.value = true
    const result = await api.sendMessage("Hello World!")

    console.log(result)
    loading.value = false
}
</script>

<template>
    <div class="bg-slate-100">
        <div class="flex flex-col items-center w-full">
            <div>
                <h1 class="py-10 text-2xl font-bold">Cover Letter Generator</h1>
            </div>

            <div class="w-full md:w-5/6 my-10">
                <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                        <label for="job-title" class="block text-sm font-medium text-gray-700">Job Title</label>
                        <input
                            v-model="details.jobTitle"
                            type="text"
                            name="job-title"
                            id="job-title"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                        <label for="company-name" class="block text-sm font-medium text-gray-700">Company name</label>
                        <input
                            v-model="details.companyName"
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
                                <input v-model="details.tone" :id="`tone-${tone.name}`" name="tone" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
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
                                v-model="details.jobDescription"
                                id="job-description"
                                name="job-description"
                                rows="3"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="job description"
                            />
                        </div>
                        <p class="mt-2 text-sm text-gray-500">Copy the whole job description and paste it in here</p>
                    </div>
                    <div class="col-span-6">
                        <label for="resume" class="block text-sm font-medium text-gray-700">Resume</label>
                        <div class="mt-1">
                            <textarea
                                v-model="details.resume"
                                id="resume"
                                name="resume"
                                rows="3"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="resume content"
                            />
                        </div>
                        <p class="mt-2 text-sm text-gray-500">Copy & Paste your resume here, don't waste your time formatting. ChatGPT doesn't give a shit 😂</p>
                    </div>
                    <div class="col-span-6">
                        <label for="additional information" class="block text-sm font-medium text-gray-700">Additional Information 🔥</label>
                        <div class="mt-1">
                            <textarea
                                v-model="details.additionalInformation"
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
                        @click="generateCoverLetter"
                        :disabled="loading"
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
