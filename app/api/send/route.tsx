import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "default@example.com";

export async function POST(req: Request) {
    const {
        firstname,
        lastname,
        email,
        subject,
        message,
    }: {
        firstname: string;
        lastname: string;
        email: string;
        subject: string;
        message: string;
    } = await req.json();

    try {
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [email],
            bcc: ["sunnyso22@myyahoo.com"],
            subject: subject,
            react: (
                <div>
                    <p>
                        Dear {firstname} {lastname},
                    </p>
                    <h1>Thank you for contacting me!</h1>
                    <p>New message submitted: </p>
                    <p>{message}</p>
                </div>
            ),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
