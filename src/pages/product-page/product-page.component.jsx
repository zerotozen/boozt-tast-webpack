import { connect } from "react-redux";

import ProductInfo from "../../components/product-info/product-info.component.jsx";

function ProductPage({ collection, match }) {
  return collection.map((item, idx) => {
    if (item.id === match.params.collectionId) {
      return (
        <div className="product-page__container" key={idx}>
          <ProductInfo item={item} />
        </div>
      );
    }
  });
}

const mapStateToProps = (state) => ({
  collection: state.collection.collectionData,
});

export default connect(mapStateToProps)(ProductPage);
