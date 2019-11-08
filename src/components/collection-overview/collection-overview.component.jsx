import React from 'react';
import './collection-overview.style.scss';
import PreviewCollection from '../preview-collection/preview-collection.component';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect';

const collectionOverview = ({ collection }) => (

    <div className="collection-overview">
        {collection.map(({ id, ...otherCollectionProps }) => (
            <PreviewCollection key={id} {...otherCollectionProps} />
        ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collection: selectCollectionsForPreview
});
export default connect(mapStateToProps)(collectionOverview);