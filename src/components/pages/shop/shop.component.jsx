import React from 'react';
import PreviewCollection from '../../preview-collection/preview-collection.component';
import { connect } from 'react-redux';
import { selectCollectionSection } from '../../../redux/collection/collection.selectors'
import {createStructuredSelector} from 'reselect';

const shopPage = ({collection}) => (
     
            <div className="shop-page">
                {collection.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
                }
            </div>
        )
const mapStateToProps = createStructuredSelector({
        collection: selectCollectionSection
          }); 
export default connect(mapStateToProps)(shopPage);