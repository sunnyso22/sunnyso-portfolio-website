import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL

export async function POST(req) {

    const { firstname, lastname, email, subject, message } = await req.json()

    try {
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [email],
            bcc: ["sohiutung123456@yahoo.com.hk"],
            subject: subject,
            react: (
                <>
                    <p>Dear {firstname} {lastname},</p>
                    <strong>Thank you for contacting me!</strong>
                    <p>New message submitted: </p>
                    <p>{message}</p>
                </>
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
