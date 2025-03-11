import { API_BASE_URL } from "@/constants/env.constant";

export async function fetchAllChampion() {
  const res = await fetch(`${API_BASE_URL}/api/champions`, {
    cache: "force-cache",
    next: { revalidate: 86400 },
  });
  const data = await res.json();
  return data;
}

export async function fetchChampionById(id: string) {
  const res = await fetch(`${API_BASE_URL}/api/champions/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export async function fetchAllItem() {
  const res = await fetch(`${API_BASE_URL}/api/items`, {
    cache: "force-cache",
  });
  const data = await res.json();
  return data;
}

export async function fetchRotationChampion() {
  const res = await fetch(`${API_BASE_URL}/api/rotation`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}
