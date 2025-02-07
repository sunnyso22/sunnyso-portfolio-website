import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || 'default@example.com';

export async function POST(req: Request) {

    const { firstname, lastname, email, subject, message }: { firstname: string, lastname: string, email: string, subject: string, message: string } = await req.json();

    const messageBody = `
        <p>Dear ${firstname} ${lastname},</p>
        <strong>Thank you for contacting me!</strong>
        <p>New message submitted: </p>
        <p>${message}</p>
    `;

    try {
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [email],
            bcc: ["sohiutung123456@yahoo.com.hk"],
            subject: subject,
            react: messageBody,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } 
    catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
