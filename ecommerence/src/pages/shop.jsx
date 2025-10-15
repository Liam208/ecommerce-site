import { useQuery } from "@tanstack/react-query";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ProductCard from "../components/product";

export default function Shop() {
  async function fetchData() {
    const res = await fetch("http://localhost:3300/product");
    return res.json();
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
    refetchInterval: 5000,
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2 className="text-red-500">Error occurred</h2>;

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <NavBar />
      </header>
      <main>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Items
            </h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Here is the list of products you can find on SwiftCart
            </p>
          </div>
        </section>
        {/* Product Grid Section */}
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-10">Products</h1>
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
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <Footer />
      </footer>
    </>
  );
}
