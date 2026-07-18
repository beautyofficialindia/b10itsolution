import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const contactFormSchema = z.object({
    name: z.string().min(2, "Please enter a valid name").max(20),
    email: z.string().min(10, "Please enter a valid email id").max(50),
    number: z.string().min(10, "Please enter a valid Phone number").max(12),
    message: z.string().min(5, "Please write your message properly").max(1000)
});

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const rawdata = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            number: formData.get("number") as string,
            message: formData.get("message") as string,
        };
        const file = formData.get("file") as File | null;

        const parseResult = contactFormSchema.safeParse(rawdata);

        if (!parseResult.success) {
            return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
        }

        const { name, email, number, message } = parseResult.data;

        // Extract file data into memory instead of writing to disk
        let fileData = null;
        let fileName = null;
        let fileType = null;

        if (file) {
            // Convert the uploaded file into a Buffer that Prisma can save as Bytes
            fileData = Buffer.from(await file.arrayBuffer());
            fileName = file.name;
            fileType = file.type; // e.g., 'application/pdf', 'image/jpeg'
        }

        const newContactRequest = await prisma.contactRequest.create({
            data: {
                name,
                email,
                number,
                message,
                fileName,
                fileType,
                fileData // Stored directly in the database
            }
        });

        return NextResponse.json(
            { success: true, message: "Record successfully indexed.", id: newContactRequest.id },
            { status: 201 }
        );

    } catch (error: unknown) {
        console.error("CRITICAL_CONTACT_API_EXCEPTION: ", error);
        return NextResponse.json(
            { error: "An unexpected runtime error occurred on our infrastructure." },
            { status: 500 }
        );
    }
}