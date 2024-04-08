import Realm from 'realm';
import { Product, Stock, ProductDetail, Customer, Purchase, PurchaseItem } from './realmSchemas';

const realm = new Realm({
  schema: [Product.schema, Stock.schema, ProductDetail.schema, Customer.schema, Purchase.schema, PurchaseItem.schema],
  schemaVersion: 1, // increment this number on each schema change
  migration: (oldRealm, newRealm) => {
    // Migration logic goes here
  },
});

export default realm;