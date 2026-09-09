import type { Mug } from "../types/mug";

export async function getMugs(): Promise<Mug[]> {
  const response = await fetch("/api/v1/mugs");
  return response.json();
}
