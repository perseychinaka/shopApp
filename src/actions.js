// actions.js

import Realm from 'realm';
import Product from './realm/realmSchemas';
export function addProduct(product) {
    return {
        type: 'ADD_PRODUCT',
        payload: product,
    };
}

export function fetchProducts() {
    return async dispatch => {
        try {
            const realm = await Realm.open({
                path: 'myrealm',
                schema: [Product],
            });

            const products = realm.objects('Product');

            dispatch({
                type: 'FETCH_PRODUCTS_SUCCESS',
                payload: products,
            });

            realm.close();
        } catch (error) {
            dispatch({
                type: 'FETCH_PRODUCTS_ERROR',
                payload: error,
            });
        }
    };
}

export function updateStock(stock) {
    return {
        type: 'UPDATE_STOCK',
        payload: stock,
    };
}

export function updateProductDetail(detail) {
    return {
        type: 'UPDATE_PRODUCT_DETAIL',
        payload: detail,
    };
}

export function addCustomer(customer) {
    return {
        type: 'ADD_CUSTOMER',
        payload: customer,
    };
}

export function addPurchase(purchase) {
    return {
        type: 'ADD_PURCHASE',
        payload: purchase,
    };
}

export function addPurchaseItem(item) {
    return {
        type: 'ADD_PURCHASE_ITEM',
        payload: item,
    };
}