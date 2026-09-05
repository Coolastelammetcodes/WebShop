import Header from "./components/header";

export default function App() {
  const testConnection = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    alert(data);
  };

  return (
    <>
      <Header></Header>
      <button onClick={testConnection}>test</button>
    </>
  );
}
