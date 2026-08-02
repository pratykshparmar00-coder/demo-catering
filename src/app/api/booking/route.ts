import { NextResponse } from 'next/server';
import { bookingFormSchema } from '@/libraries/forms/bookingSchema';

export async function POST(request: Request) {
  const body = await request.json();
  const parseResult = bookingFormSchema.safeParse(body);
  if (!parseResult.success) {
    return NextResponse.json({
      success: false,
      errors: parseResult.error.flatten().fieldErrors
    }, { status: 400 });
  }

  const bookingData = parseResult.data;
  const bookingId = 'CN-' + Math.floor(100000 + Math.random() * 900000);

  // In production, save to Database / send WhatsApp notification
  console.log(`[BOOKING RECEIVED] ID: ${bookingId}`, bookingData);

  return NextResponse.json({
    success: true,
    bookingId,
    message: 'Your catering inquiry has been submitted! A Ninja Catering Specialist will contact you within 15 minutes.'
  });
}
