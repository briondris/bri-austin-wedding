export const SAVE_THE_DATE_DEADLINE = new Date("2026-10-31T23:59:59");

export const SAVE_THE_DATE_DEADLINE_LABEL =
  SAVE_THE_DATE_DEADLINE.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
