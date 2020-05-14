import React from 'react';
import {Route} from 'react-router-dom';
import CollectionPreview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import './shop.styles.scss';

const ShopPage= ({match})=> (
   
        
       <div className='shopPage'>
           <Route exact path={`${match.path}`} component={CollectionPreview} />
           <Route  path={`${match.path}/:collectionId`} component={CollectionPage}/>


        </div>
      
)


export default ShopPage;
