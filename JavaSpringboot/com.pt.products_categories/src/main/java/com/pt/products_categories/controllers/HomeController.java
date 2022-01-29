package com.pt.products_categories.controllers;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.pt.products_categories.models.Category;
import com.pt.products_categories.models.Product;
import com.pt.products_categories.services.CategoryService;
import com.pt.products_categories.services.ProductService;

@Controller
public class HomeController {
	private final ProductService productService;
	private final CategoryService categoryService;

	public HomeController(ProductService productService, CategoryService categoryService) {
		this.productService = productService;
		this.categoryService = categoryService;
	}
	
	@GetMapping("/")
	public String index(@ModelAttribute("product") Product product, 
						@ModelAttribute("category") Category category, 
						Model model) {
		
		model.addAttribute("products", productService.allProducts() );
		model.addAttribute("categories", categoryService.allCategories() );
				
		return "index.jsp";
	}
	
	@PostMapping("/product/new")
	public String index(@Valid @ModelAttribute("product") Product product, BindingResult result, Model model) {

		this.productService.createProduct(product);
		return "redirect:/";
	}
	
	@PostMapping("/category/new")
	public String index(@Valid @ModelAttribute("category") Category category, BindingResult result, Model model) {

		this.categoryService.createCategory(category);
		return "redirect:/";
	}
	
	@DeleteMapping("/product/{productId}")
	public String deleteProduct(@PathVariable("productId") Long id) {

		this.productService.delete(id);
		return "redirect:/";
	}
	
	@DeleteMapping("/category/{categoryId}")
	public String deleteCategory(@PathVariable("categoryId") Long id) {

		this.categoryService.delete(id);
		
		return "redirect:/";
	}
	
	@GetMapping("/category/{categoryId}")
	public String categoryView(@PathVariable("categoryId") Long id,
								Model model) {
		
		Category category = categoryService.getCategory(id);
		
		model.addAttribute("category", category);
		model.addAttribute("products", productService.getWithout(category) );
		
		return "/category/view.jsp";
	}

	@GetMapping("/product/{productId}")
	public String productView(@PathVariable("productId") Long id,
							   Model model) {
		
		Product product = productService.getProduct(id);
		
		model.addAttribute("product", product);
		model.addAttribute("categories", categoryService.getWithout(product) );
		
		return "/product/view.jsp";
	}
	
	@GetMapping("/category/{categoryId}/add/{productId}")
	public String addCategoryToProduct(@PathVariable("categoryId") Long categoryId, 
								@PathVariable("productId") Long productId) {
		
		Category category = categoryService.getCategory(categoryId);
		Product product = productService.getProduct(productId);
		
		category.addProduct(product);
		categoryService.updateCategory(category);

		return "redirect:/category/{categoryId}";
	}
	
	@GetMapping("/product/{productId}/addTo/{categoryId}")
	public String addProductToCategory(@PathVariable("productId") Long productId,
										@PathVariable("categoryId") Long categoryId) {
		
		Category category = categoryService.getCategory(categoryId);
		Product product = productService.getProduct(productId);
		
		category.addProduct(product);
		categoryService.updateCategory(category);

		return "redirect:/product/{productId}";
	}
	
}//END CLASS
