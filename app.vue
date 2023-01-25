<script setup lang="ts">
import { reactive, ref } from "vue"
import { tones } from "./data/tones"

const loading = ref(false)
const coverLetter = ref("")

const details = reactive({
    job: "",
    description: "",
    company: "",
    resume: "",
    tone: [],
    additionalInformation: "",
})

async function generateCoverLetter() {
    loading.value = true
    coverLetter.value = ""

    try {
        // eslint-disable-next-line no-undef
        const res = await $fetch("/api/prompt", { method: "post", body: { ...details, tone: details.tone.join(",") } })
        coverLetter.value = res.result.response
    } catch (e) {
        alert("Something went wront")
        // eslint-disable-next-line no-console
        console.log(e)
    } finally {
        loading.value = false
    }
}
</script>

<template>
    <div class="bg-slate-100 flex flex-col items-center">
        <div class="md:w-5/6 px-10">
            <div class="w-full">
                <div>
                    <h1 class="py-10 text-2xl font-bold">Cover Letter Generator</h1>
                </div>

                <div class="w-full my-10">
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label for="job-title" class="block text-sm font-medium text-gray-700">Job Title</label>
                            <input
                                id="job-title"
                                v-model="details.job"
                                type="text"
                                name="job-title"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div class="col-span-6 sm:col-span-3">
                            <label for="company-name" class="block text-sm font-medium text-gray-700">Company name</label>
                            <input
                                id="company-name"
                                v-model="details.company"
                                type="text"
                                name="company-name"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div class="mt-2 space-y-4 col-span-6">
                            <!-- h element with text "Tone" -->
                            <h3 class="text-base font-medium leading-6 text-gray-700">Tone</h3>
                            <div v-for="tone in tones" :key="tone.emoji" class="flex items-start">
                                <div class="flex h-5 items-center">
                                    <input
                                        :id="`tone-${tone.name}`"
                                        v-model="details.tone"
                                        :value="tone.name"
                                        name="tone"
                                        type="checkbox"
                                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
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
                                    v-model="details.description"
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
                                    id="resume"
                                    v-model="details.resume"
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
                                    id="additional information"
                                    v-model="details.additionalInformation"
                                    name="additional information"
                                    rows="3"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="my years of experience: 4
my name: Clarance Liberi"
                                />
                            </div>
                            <p class="mt-2 text-sm text-gray-500">
                                This is the important section, this will make your coverlet unique, include some info that AI could hadly detect. like total years of experience, your full names,
                                preferred names or any fkn thing
                            </p>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button
                            :disabled="loading"
                            type="button"
                            class="inline-flex flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            @click="generateCoverLetter"
                        >
                            <template v-if="loading">
                                <span class="mr-2"> Generating</span>

                                <svg class="fill-white animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z" />
                                </svg>
                            </template>
                            <template v-else> Generate Cover Letter </template>
                        </button>
                    </div>
                </div>
            </div>
            <div class="mb-10">
                <h1 class="font-bold my-2">Generated Cover Letter</h1>
                <div class="border-2 rounded border-grey-400 p-2 whitespace-pre-wrap">{{ coverLetter }}</div>
            </div>
        </div>
    </div>
</template>
