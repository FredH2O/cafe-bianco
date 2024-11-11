import Categories from "./Menu.json";
import MenuCategory from "./MenuCategory";

export default function Menu() {
  return (
    <section className="menu-section section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <MenuCategory
            title="Lunch & Breakfast"
            items={Categories.sandwiches}
            slogan="Fuel Your Day with Deliciousness!"
          />
          <MenuCategory
            slogan="Brewed to Perfection!"
            title="Coffee"
            items={Categories.coffees}
          />
          <MenuCategory
            slogan="Eat Clean, Feel Great!"
            title="Salads"
            items={Categories.salads}
          />
          <MenuCategory
            slogan="Chill, Sip, and Refresh!"
            title="Teas"
            items={Categories.teas}
          />
        </div>
      </div>
    </section>
  );
}
