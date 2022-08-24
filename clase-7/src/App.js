import Blog from "./components/Blogs";


function App() {
  const post = [
    { id: 1, title: "my firt entry", content: "lorem ipsum" },
    { id: 2, title: "my second entry", content: "lorem ipsum" },
    { id: 3, title: "my third entry", content: "lorem ipsum" },
  ];

  return (
    <Blog posts={post} />
  )
}

export default App;
