import { NextResponse } from 'next/server';
import { SAMPLE_MENU } from '../../../../libraries/pricing/menuData';

export async function GET() {
  return NextResponse.json({
    success: true,
    data: SAMPLE_MENU
  });
}
