export interface SelectOption {
  value: string;
  label: string;
}
export const budgetOptions: SelectOption[] = [
  {
    value: "under-50000",
    label: "Under ₹50,000",
  },
  {
    value: "50000-100000",
    label: "₹50,000 – ₹1,00,000",
  },
  {
    value: "100000-300000",
    label: "₹1,00,000 – ₹3,00,000",
  },
  {
    value: "300000-500000",
    label: "₹3,00,000 – ₹5,00,000",
  },
  {
    value: "500000-plus",
    label: "Above ₹5,00,000",
  },
  {
    value: "not-sure",
    label: "Not Sure Yet",
  },
];

export const timelineOptions: SelectOption[] = [
  {
    value: "asap",
    label: "Immediately",
  },
  {
    value: "1-month",
    label: "Within 1 Month",
  },
  {
    value: "2-3-months",
    label: "2–3 Months",
  },
  {
    value: "3-6-months",
    label: "3–6 Months",
  },
  {
    value: "planning",
    label: "Just Planning",
  },
];
