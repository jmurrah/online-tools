import List from "./components/List";

function App() {
  return (
    <div className="w-full h-full flex justify-center items-center p-4">
      <div className="w-full h-full flex flex-col max-w-2xl mt-[clamp(2rem,6vmin,6rem)]">
        <h1>Tools</h1>
        <p>
          Collection of online tools made with ❤️ by{" "}
          <a
            href="https://murrah.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap"
          >
            Jacob Murrah
          </a>
        </p>
        <div className="grid gap-x-4 w-full grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
          <List
            title="Web Extensions"
            urls={["https://leetcode-repetition.murrah.dev/"]}
          />
          <List
            title="Engineering"
            urls={["https://pict-online.murrah.dev/"]}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
