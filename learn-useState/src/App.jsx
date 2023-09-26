import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="pt-10 text-center">
      <p className="text-xl capitalize font-semibold">
        learn about the useState() Hook
      </p>

      <section className="pt-10">
        <p className="text-xl font-medium">{count}</p>
        {/* btn container */}
        <div className="pt-10 space-x-6">
          <button
            onClick={() => setCount(count + 1)}
            className="text-white bg-black/90 px-3 py-2 rounded-md capitalize font-medium"
          >
            increase
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="text-white bg-black/90 px-3 py-2 rounded-md capitalize font-medium"
          >
            decrease
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
