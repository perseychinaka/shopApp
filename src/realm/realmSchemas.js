
class Product {
    static schema = {
     primaryKey: 'id',
     name: 'Product',
     properties: {
       name: 'string',
       description: 'string',
       category: 'string',
     },
   };
   }
   class Stock {
    static schema = {
     primaryKey: 'id',
     name: 'Stock',
     properties: {
       date: 'date',
       total: 'double',
     },
   };
   }
   class ProductDetail {
    static schema = {
     primaryKey: 'id',
     name: 'ProductDetail',
     properties: {
       product: 'Product',
       quantity: 'int',
       price: 'double',
       size: 'string',
       cost: 'double',
       barcode: 'string',
       expiry_date: 'date',
     },
   };
   }
   class Customer {
    static schema = {
     primaryKey: 'id',
     name: 'Customer',
     primaryKey: 'number',
     properties: {
       name: 'string',
       number: 'string',
     },
   };
   }
   
   class Purchase {
    static schema = {
     primaryKey: 'id',
     name: 'Purchase',
     properties: {
       customer: 'ProductDetail',
       product: 'Customer',
       at: 'date',
       total_paid: 'double',
     },
   };
   }
   class PurchaseItem {
    static schema = {
     primaryKey: 'id',
     name: 'PurchaseItem',
     properties: {
       purchase: 'Purchase',
       detail: 'ProductDetail',
       quantity: 'int',
     },
   };
   }
   export { Product, Stock, ProductDetail, Customer, Purchase, PurchaseItem };