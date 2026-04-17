import {
  BookingRequest,
  CamperDetails,
  CamperFilters,
  CamperResponse,
  Review,
} from "@/types/camper";

const BASE_URL = "https://campers-api.goit.study";

export async function getCampers(
  page: number,
  filters: CamperFilters,
): Promise<CamperResponse> {
  const params = new URLSearchParams();

  params.set("page", String(page));
  params.set("limit", "4");

  if (filters.location) params.set("location", filters.location);
  if (filters.form) params.set("form", filters.form);
  if (filters.transmission) params.set("transmission", filters.transmission);
  if (filters.engine) params.set("engine", filters.engine);

  const res = await fetch(`${BASE_URL}/campers?${params}`);
  if (!res.ok) throw new Error("Failed to fetch campers");
  return res.json();
}

export async function getCamperById(id: string): Promise<CamperDetails> {
  const res = await fetch(`${BASE_URL}/campers/${id}`);
  if (!res.ok) throw new Error("Failed to fetch camper");
  return res.json();
}

export async function getCamperReviews(id: string): Promise<Review[]> {
  const res = await fetch(`${BASE_URL}/campers/${id}/reviews`);
  if (!res.ok) throw new Error("Failed to fetch reviews");
  return res.json();
}

export async function createBooking(
  camperId: string,
  data: BookingRequest,
): Promise<void> {
  const res = await fetch(`${BASE_URL}/campers/${camperId}/booking-requests`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create booking");
}
