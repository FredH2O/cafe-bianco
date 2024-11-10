import Categories from "./Menu.json";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  return (
    <section className="menu-section section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <MenuCategory title="Lunch" items={Categories.sandwiches} />
          <MenuCategory title="Coffee" items={Categories.coffees} />
          <MenuCategory title="Salads" items={Categories.salads} />
          <MenuCategory title="Teas" items={Categories.teas} />
        </div>
      </div>
    </section>
  );
}
