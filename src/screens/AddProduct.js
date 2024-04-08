import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './actions';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function AddProductScreen() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    category: '',
    quantity: 0,
    price: 0.0,
    size: '',
    cost: 0.0,
    barcode: '',
    expiry_date: new Date(),
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addProduct(product));
    setProduct({
      name: '',
      description: '',
      category: '',
      quantity: 0,
      price: 0.0,
      size: '',
      cost: 0.0,
      barcode: '',
      expiry_date: new Date(),
    }); // reset form
  };

  const handleChange = (name, value) => {
    setProduct({ ...product, [name]: value });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={product.name}
        onChangeText={(value) => handleChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={product.description}
        onChangeText={(value) => handleChange('description', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={product.category}
        onChangeText={(value) => handleChange('category', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={product.quantity.toString()}
        onChangeText={(value) => handleChange('quantity', parseInt(value))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={product.price.toString()}
        onChangeText={(value) => handleChange('price', parseFloat(value))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Size"
        value={product.size}
        onChangeText={(value) => handleChange('size', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cost"
        value={product.cost.toString()}
        onChangeText={(value) => handleChange('cost', parseFloat(value))}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Barcode"
        value={product.barcode}
        onChangeText={(value) => handleChange('barcode', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (YYYY-MM-DD)"
        value={product.expiry_date.toISOString().split('T')[0]}
        onChangeText={(value) => handleChange('expiry_date', new Date(value))}
      />
      <Button title="Add Product" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default AddProductScreen;