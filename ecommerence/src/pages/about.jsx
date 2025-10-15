import NavBar from "../components/navbar";

export default function About() {
  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <NavBar />
      </header>
      <main>
        <section className="bg-blue-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              About SwiftCart
            </h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              SwiftCart is your one-stop shop for tech gadgets and stylish
              apparel. Our mission is to provide high-quality products with a
              seamless shopping experience.
            </p>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2024, SwiftCart was created to make online shopping
              simple, fast, and enjoyable. We carefully curate our product
              selection to ensure you get only the best.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Why Choose Us?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Wide range of products</li>
              <li>Fast and secure checkout</li>
              <li>Friendly customer support</li>
              <li>Quality guarantee</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
