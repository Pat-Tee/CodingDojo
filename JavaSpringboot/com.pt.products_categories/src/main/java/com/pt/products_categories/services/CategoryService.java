package com.pt.products_categories.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.pt.products_categories.models.Category;
import com.pt.products_categories.models.Product;
import com.pt.products_categories.repositories.CategoryRepository;

@Service
public class CategoryService {
	private final CategoryRepository categoryRepo;
	
	public CategoryService(CategoryRepository categoryRepo) {
		this.categoryRepo = categoryRepo;
	}
	
	public List<Category> allCategories() {
		return categoryRepo.findAll();
	}
	
	public Category createCategory(Category category) {
		return categoryRepo.save(category);
	}
	
	public Category updateCategory(Category category) {
		return categoryRepo.save(category);
	}
	
	public Category getCategory(Long id) {
		Optional<Category> category = categoryRepo.findById(id);
		if (category != null)
			return category.get();
		else
			return null;
	}
	
	public List<Category> getWithout(Product product) {
		return categoryRepo.findByProductsNotContains(product);
	}
	
	public void delete(Long id) {
		
		categoryRepo.deleteById(id);
	}
}
