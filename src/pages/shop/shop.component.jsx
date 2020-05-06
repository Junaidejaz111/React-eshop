import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection-preview.component';
import './shop.styles.scss';

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state={
        collections: SHOP_DATA

        }
    }

    render(){
        const {collections} = this.state;
        return (<div className='shopPage'>{
            collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }

        </div>
        )}
}

export default ShopPage;
