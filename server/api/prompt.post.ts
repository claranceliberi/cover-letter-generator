import { ChatGPTAPIBrowser } from "chatgpt"

export default defineEventHandler(async (event) => {
    const { job, company, description, resume, tone, additionalInformation } = await readBody(event)
    const prompt = `
        Assume you are a job seeker below is your RESUME, and remember """ marks the beginning and the end of the provided information.

        RESUME:
        """
        ${resume}
        """

        by using provided RESUME, generate a cover letter  showing interest and why you are a good fit for the following job

        JOB TITLE:
        """
        ${job}
        """

        COMPANY:
        """
        ${company}
        """

        JOB DESCRIPTION:
        """
        ${description}
        """

        While writing a cover letter, write it in the following tones '${tone}'.

        You may also consider the following info while writing the cover letter
        """
        ${additionalInformation}
        """
        `
    // console.log("init :")
    // console.log("Authenticating...")

    const api = new ChatGPTAPIBrowser({
        email: "liberintwari+1@gmail.com",
        password: "MKSrAFMpgZt9P2z",
    })

    // console.log("Initiationg session")

    await api.initSession()

    // console.log("Sending message")

    const result = await api.sendMessage(prompt)

    // console.log(result)

    return { message: "Success", result }
})
