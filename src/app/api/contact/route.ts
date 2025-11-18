import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { contactSchema } from '@/lib/validation';
import { rateLimit } from '@/lib/rate-limit';

async function sendLeadNotification(payload: {
  name: string;
  email: string;
  company: string;
  role: string;
  companySize: string;
  message: string;
}) {
  // TODO: Replace with Resend/SendGrid integration.
  console.log('New lead received', payload);
}

export async function POST(request: Request) {
  try {
    const identifier = request.headers.get('x-forwarded-for') ?? 'anonymous';
    const { allowed } = rateLimit(identifier);
    if (!allowed) {
      return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const data = await request.json();
    const parsed = contactSchema.safeParse(data);

    if (!parsed.success) {
      return NextResponse.json({ message: 'Invalid data submitted.' }, { status: 400 });
    }

    const lead = await prisma.lead.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company,
        role: parsed.data.role,
        companySize: parsed.data.companySize,
        message: parsed.data.message,
        source: 'website'
      }
    });

    await sendLeadNotification(parsed.data);

    return NextResponse.json({ id: lead.id }, { status: 201 });
  } catch (error) {
    console.error('Contact API error', error);
    return NextResponse.json({ message: 'Unable to process your request at this time.' }, { status: 500 });
  }
}
