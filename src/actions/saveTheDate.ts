"use server";

import { supabase } from "@/lib/supabase";
import type { SaveTheDateResult } from "@/types/saveTheDate";

export async function submitSaveTheDate(
  formData: FormData
): Promise<SaveTheDateResult> {
  const data = {
    full_name: formData.get("full_name") as string,
    address_line1: formData.get("address_line1") as string,
    address_line2: formData.get("address_line2") as string,
    city: formData.get("city") as string,
    state: formData.get("state") as string,
    zip: formData.get("zip") as string,
  };

  const { error } = await supabase.from("save_the_dates").insert([data]);

  if (error) {
    console.error("Supabase Save the Date error:", error);
    return { success: false, error: error.message };
  }
  return { success: true };
}
