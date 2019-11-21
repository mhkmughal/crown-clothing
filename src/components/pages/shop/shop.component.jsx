import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionOverview from '../../collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionStartAsync } from '../../../redux/shop/shop.actions';
import WithSpinner from '../../with-spinner/with-spinner.component';
import {createStructuredSelector} from 'reselect';
import {selectCollectionFetching} from '../../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {

    componentDidMount() {
      const {fetchCollectionStartAsync}= this.props;
      fetchCollectionStartAsync();
    }

    render() {
        const { match,isCollectionFetching } = this.props; 
        return (

            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                } />

                <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
                } />
            </div>
        )
    }
}

/* const mapStateToProps = createStructuredSelector({
    isFetching: selectCollectionFetching
}); */

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectCollectionFetching,
  });

const mapDispatchToProps = dispatch => ({
fetchCollectionStartAsync: ()=> dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);