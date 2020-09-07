package com.cts.product.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cts.product.Product;

public interface ProductDao extends MongoRepository<Product, String>{

	// List<Product>findProductByNameLike(String name);
}
