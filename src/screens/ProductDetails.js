import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

function ProductDetailsScreen({ route }) {
  const { productId } = route.params;
  const product = useSelector(state => state.products.find(p => p.id === productId));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>Category: {product.category}</Text>
      <Text>Price: {product.price}</Text>
      <Text>Size: {product.size}</Text>
      <Text>Cost: {product.cost}</Text>
      <Text>Barcode: {product.barcode}</Text>
      <Text>Expiry Date: {product.expiry_date.toISOString().split('T')[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ProductDetailsScreen;