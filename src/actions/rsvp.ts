"use server";

import { supabase } from "@/lib/supabase";
import type { RSVPResult } from "@/types/rsvp";

export async function submitRSVP(formData: FormData): Promise<RSVPResult> {
  const data = {
    guest_name: formData.get("guest_name") as string,
    attending: formData.get("attending") === "on",
    party_size: Number(formData.get("party_size")),
    meal_preference: formData.get("meal_preference") as string,
    dietary_restrictions: formData.get("dietary_restrictions") as string,
    message: formData.get("message") as string,
  };

  const { error } = await supabase.from("rsvps").insert([data]);

  if (error) {
    console.error("Supabase RSVP error:", error);
    return { success: false, error: error.message };
  }
  return { success: true };
}
