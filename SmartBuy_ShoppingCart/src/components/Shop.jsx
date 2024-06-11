export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Shop Smarter, Not Harder🤞</h2>

      <ul id="products">
        {children}
      </ul>
    </section>
  );
}
