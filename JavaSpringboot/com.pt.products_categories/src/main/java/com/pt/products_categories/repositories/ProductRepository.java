package com.pt.products_categories.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pt.products_categories.models.Category;
import com.pt.products_categories.models.Product;

@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
	List<Product> findAll();
	List<Product> findAllByCategories(Category category);
	List<Product> findByCategoriesNotContains(Category category);
}


