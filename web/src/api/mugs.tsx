export async function getMugs() {
  const response = await fetch("/api");
  return response.json();
}
