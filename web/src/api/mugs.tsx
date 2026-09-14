import type { Mug } from "../routes/dashboard/mugSchema";

type MugUpdate = {
  name?: string;
  description?: string;
  filepath?: string;
  price?: number;
};

export async function editMug(id: number, data: MugUpdate) {
  const response = await fetch(`/api/v1/mugs/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`failed to update mug: ${response.status}`);
  }

  return response.json();
}

export async function deleteMug(id: number) {
  const response = await fetch(`/api/v1/mugs/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`failed to delete mug: ${response.status}`);
  }

  return;
}

export async function getMugs() {
  const response = await fetch("/api/v1/mugs");

  if (!response.ok) {
    return new Error(`failed to fetch mugs: ${response.status}`);
  }

  return response.json();
}

export async function addMug(mug: Mug) {
  const response = await fetch("/api/v1/mugs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mug),
  });

  if (!response.ok) {
    throw new Error(`failed to add mug: ${response.status}`);
  }

  return response.json();
}
