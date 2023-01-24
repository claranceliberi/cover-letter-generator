import type { VercelRequest, VercelResponse } from "@vercel/node"
import { ChatGPTAPIBrowser } from "chatgpt"

module.exports = async (req: VercelRequest, res: VercelResponse) => {
    if (req.method === "POST") {
        const { job, company, description, resume, tone, additionalInformation } = req.body
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

        While writing a cover letter, write it in the following tones '${tone.join(",")}'.

        You may also consider the following info while writing the cover letter
        """
        ${additionalInformation}
        """
        `
        const api = new ChatGPTAPIBrowser({
            email: "liberintwari+1@gmail.com",
            password: "MKSrAFMpgZt9P2z",
        })

        await api.initSession()

        const result = await api.sendMessage("Hello World!")

        console.log(result)

        res.status(200).json({ message: "Success", prompt: prompt })
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}
