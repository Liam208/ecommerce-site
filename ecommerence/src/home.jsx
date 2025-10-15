import HeroCard from "./components/hero.jsx";
import NavBar from "./components/navbar.jsx";
import ProductCard from "./components/product.jsx";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  async function fetchData() {
    const res = await fetch("http://localhost:3300/home/products");
    return res.json();
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2 className="text-red-500">Error occurred</h2>;
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <NavBar />
      </header>
      <section className="bg-blue-600">
        <HeroCard />
      </section>
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              bio={product.description}
              price={product.price}
              image={product.images[0]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
