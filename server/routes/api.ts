import { Router } from 'express';
import { calculateCateringQuote, MenuItem } from '../../libraries/pricing/calculator';
import { bookingFormSchema } from '../../libraries/forms/bookingSchema';
import { SAMPLE_MENU } from '../../libraries/pricing/menuData';

const router = Router();



// GET Menu catalog
router.get('/menu', (req, res) => {
  res.json({
    success: true,
    data: SAMPLE_MENU
  });
});

// POST Calculate dynamic quote
router.post('/quote/calculate', (req, res) => {
  try {
    const quote = calculateCateringQuote(req.body);
    res.json({
      success: true,
      quote
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Failed to calculate quote'
    });
  }
});

// POST Submit Booking Inquiries
router.post('/booking', (req, res) => {
  const parseResult = bookingFormSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      success: false,
      errors: parseResult.error.flatten().fieldErrors
    });
  }

  const bookingData = parseResult.data;
  const bookingId = 'CN-' + Math.floor(100000 + Math.random() * 900000);

  // In production, save to Database / send WhatsApp notification
  console.log(`[BOOKING RECEIVED] ID: ${bookingId}`, bookingData);

  res.json({
    success: true,
    bookingId,
    message: 'Your catering inquiry has been submitted! A Ninja Catering Specialist will contact you within 15 minutes.'
  });
});

export default router;
