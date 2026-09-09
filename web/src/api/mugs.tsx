export async function getMugs() {
  const response = await fetch("/api/v1/mugs");
  return response.json();
}
