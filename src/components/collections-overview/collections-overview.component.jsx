import React from 'react';
import {connect} from 'react-redux';
import {selectShopItems}from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';

const CollectionsOverview = ({collections})=>(

    <div className="collections-overview">
       { collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
    </div>
);
const mapStateToProps= createStructuredSelector({
    collections: selectShopItems
});
export default connect(mapStateToProps) (CollectionsOverview);