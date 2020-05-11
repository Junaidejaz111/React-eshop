import React from 'react';

import CollectionPreview from '../../components/collections-overview/collections-overview.component';
import './shop.styles.scss';

const ShopPage= ({collections})=> (
   
        
       <div className='shopPage'>{
            <CollectionPreview />
        }

        </div>
      
)


export default ShopPage;
