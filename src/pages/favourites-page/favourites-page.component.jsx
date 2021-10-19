import { connect } from "react-redux";
import OverviewCollection from "../../components/overview-collection/overview-collection.components.jsx";

import "./favourites-page.styles.scss";

function FavouritesPage({ favourites }) {
  return (
    <div className="favourites-page__container">
      <OverviewCollection dataToRender={favourites} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  favourites: state.favourites.favouritesList,
});

export default connect(mapStateToProps)(FavouritesPage);
