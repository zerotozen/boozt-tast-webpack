import { useEffect } from "react";

import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/collection/collection.actions";

import OverviewCollection from "../../components/overview-collection/overview-collection.components.jsx";

import "./homepage.styles.scss";

function HomePage({ fetchCollectionsStartAsync, collections }) {
  //This setTimeout simulate a API delay of 1s
  useEffect(() => {
    fetchCollectionsStartAsync();
    setTimeout(() => {
      fetchCollectionsStartAsync();
    }, 1000);
  }, []);

  return (
    <div className="home-page__container">
      <OverviewCollection dataToRender={collections} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  collections: state.collection.collectionData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
