function MenuCategory({ items, title }) {
  return (
    <div className="col-lg-6 col-12 mb-1 mb-lg-0 my-3">
      <div className="menu-block-wrap">
        <div className="text-center mb-4 pb-lg-2">
          <em className="text-white">Delicious Menu</em>
          <h4 className="text-white">{title}</h4>
        </div>
        {items.map((item, index) => {
          const oldPrice = item.oldprice ? item.oldprice : "";

          return (
            <div className="menu-block" key={index}>
              <div className="d-flex w-100">
                <h6>{item.name}</h6>

                <span className="underline"></span>

                {oldPrice ? (
                  <>
                    <strong className="text-white ms-auto me-2">
                      <del>€{oldPrice.toFixed(2)}</del>
                    </strong>
                    <strong>€{item.price.toFixed(2)}</strong>
                  </>
                ) : (
                  <strong className="ms-auto">€{item.price.toFixed(2)}</strong>
                )}
              </div>

              <div className="border-top mt-2 pt-2">
                <small>{item.description}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MenuCategory;
