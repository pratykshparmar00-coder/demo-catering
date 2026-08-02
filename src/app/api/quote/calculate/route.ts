import { NextResponse } from 'next/server';
import { calculateCateringQuote } from '@/libraries/pricing/calculator';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const quote = calculateCateringQuote(body);
    return NextResponse.json({
      success: true,
      quote
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message || 'Failed to calculate quote'
    }, { status: 400 });
  }
}
