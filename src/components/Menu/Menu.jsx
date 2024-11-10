import Categories from "./Menu.json";

export default function Menu() {
  return (
    <section className="menu-section section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <div className="menu-block-wrap">
              <div className="text-center mb-4 pb-lg-2">
                <em className="text-white">Delicious Menu</em>
                <h4 className="text-white">Lunch</h4>
              </div>
              {Categories.sandwhiches.map((item, index) => (
                <div className="menu-block" key={index}>
                  <div className="d-flex">
                    <h6>{item.name}</h6>

                    <span className="underline"></span>

                    <strong className="ms-auto">
                      €{item.price.toFixed(2)}
                    </strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>{item.description}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="menu-block-wrap">
              <div className="text-center mb-4 pb-lg-2">
                <em className="text-white">Favourite Menu</em>
                <h4 className="text-white">Coffee</h4>
              </div>
              {Categories.coffees.map((item, index) => (
                <div className="menu-block" key={index}>
                  <div className="d-flex">
                    <h6>{item.name}</h6>

                    <span className="underline"></span>

                    <strong className="text-white ms-auto">
                      <del>€{item.price}</del>
                    </strong>

                    <strong className="ms-2">€{item.price}</strong>
                  </div>

                  <div className="border-top mt-2 pt-2">
                    <small>{item.description}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
