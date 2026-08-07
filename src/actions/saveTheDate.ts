"use server";

import { supabase } from "@/lib/supabase";
import type { SaveTheDateResult } from "@/types/saveTheDate";

export async function submitSaveTheDate(
  formData: FormData
): Promise<SaveTheDateResult> {
  const data = {
    first_name: formData.get("first_name") as string,
    suffix: formData.get("suffix") as string,
    last_name: formData.get("last_name") as string,
    partner_first_name: formData.get("partner_first_name") as string,
    partner_last_name: formData.get("partner_last_name") as string,
    partner_suffix: formData.get("partner_suffix") as string,
    has_children: formData.get("has_children") === "on",
    children_names: formData.get("children_names") as string,
    interested_anchor_inn: formData.get("interested_anchor_inn") === "on",
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
