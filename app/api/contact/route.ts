
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactFormSchema = z.object({
    name: z.string().min(2, "Please enter a valid name").max(20),
    email: z.string().min(10, "Please enter a valid email id").max(50),
    number: z.string().min(10, "Please enter a valid Phone number").max(12),
    message: z.string().min(5, "Please write your message properly").max(1000)
})

export async function POST(request: Request) {
    try {
        const rawdata = await request.json();
        const parseResult = contactFormSchema.safeParse(rawdata);

        if (!parseResult.success) {
            return NextResponse.json({ error: "Error" }, { status: 400 });
        }

        const { name, email, number, message } = parseResult.data;

        const newContactRequest = await prisma.contactRequest.create({
            data: {
                name, email, number, message
            }
        });

        return NextResponse.json(
            { success: true, message: "Record successfully indexed.", id: newContactRequest.id },
            { status: 201 }
        );

    } catch (error: unknown) {
        console.error("CRITICAL_CONTACT_API_EXCEPTION: ", error);
        return NextResponse.json(
            { error: "An unexpected database runtime error occurred on our infrastructure." },
            { status: 500 }
        );

    }



}