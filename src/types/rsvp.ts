export interface RSVPSubmission {
  guest_name: string;
  attending: boolean;
  party_size: number;
  meal_preference: string;
  dietary_restrictions: string;
  message: string;
}

export interface RSVPResult {
  success: boolean;
  error?: string;
}
