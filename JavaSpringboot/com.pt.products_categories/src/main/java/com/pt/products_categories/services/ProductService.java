package com.pt.products_categories.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.pt.products_categories.models.Category;
import com.pt.products_categories.models.Product;
import com.pt.products_categories.repositories.ProductRepository;

@Service
public class ProductService {
	private final ProductRepository productRepo;
	
	public ProductService(ProductRepository productRepo) {
		this.productRepo = productRepo;
	}
	
	public List<Product> allProducts() {
		return productRepo.findAll();
	}
	
	public Product createProduct(Product product) {
		return productRepo.save(product);
	}
	
	public Product getProduct(Long id) {
		Optional<Product> product = productRepo.findById(id);
		if (product != null)
			return product.get();
		else
			return null;
	}
	
	public List<Product> getWithout(Category category) {
		return productRepo.findByCategoriesNotContains(category);
	}
	
	public void delete(Long id) {
		productRepo.deleteById(id);
	}
}
