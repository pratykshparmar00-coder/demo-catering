import { z } from 'zod';

export const bookingFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Enter a valid 10-digit Indian phone number' }),
  email: z.string().email({ message: 'Enter a valid email address' }),
  eventDate: z.string().min(1, { message: 'Please select an event date' }),
  eventTime: z.string().min(1, { message: 'Please select an event time' }),
  city: z.enum(['Bengaluru', 'Mumbai', 'Pune', 'Delhi-NCR', 'Hyderabad', 'Chennai'], {
    required_error: 'Please select a delivery city',
  }),
  eventType: z.enum(['House Party', 'Birthday Celebration', 'Corporate Event', 'Wedding / Engagement', 'Festival Special', 'Other']),
  guestCount: z.number().min(10, { message: 'Minimum order is for 10 guests' }),
  deliveryAddress: z.string().min(5, { message: 'Delivery address is required' }),
  specialInstructions: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
