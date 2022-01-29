<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Products and Categories</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/style.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body class="bg-dark">
	<div class="mt-5 container d-flex col justify-content-around">
	
	<div>
	<h1 class="border bg-secondary rounded text-center">New Product</h1>
	<form:form class="p-2 border bg-secondary rounded" action="/product/new" method="POST" modelAttribute="product">
	<div class="d-flex justify-content-between"><form:label path="name"><h5>Name</h5></form:label>
		<form:errors path="name"/>
		<form:input path="name"/></div>
	<div class="d-flex justify-content-between"><form:label path="description"><h5>Description</h5></form:label>
		<form:errors path="description"/>
		<form:input path="description"/></div>
	<div class="d-flex justify-content-between"><form:label path="price"><h5>Price</h5></form:label>
		<form:errors path="price"/>
		<form:input type="number" path="price"/></div>
	<input type="submit" class="btn btn-primary" value="Submit"/>
	</form:form>
	</div>

	<div>
	<h1 class="border bg-secondary rounded text-center">New Category</h1>
	<form:form class="p-2 border bg-secondary rounded text-center" action="/category/new" method="POST" modelAttribute="category">
	<form:label path="name"><h5>Category name</h5></form:label>
	<form:errors path="name"/>
	<form:input path="name"/>
	<input type="submit" class="btn btn-primary" value="Submit"/>
	</form:form>
	</div>
	
	</div>
	
	<div class="mt-5 container d-flex col justify-content-around">
		<div>
		<h1 class="border bg-secondary rounded text-center">Products</h1>
		<div class="p-2 border bg-secondary rounded">
			<c:forEach var="product" items="${products}">
			<div class="p-1 d-flex justify-content-between">
			<a href="/product/${product.id}">
				<c:out value="${product.name}"/></a> - <c:out value="${product.description}"/> - $<c:out value="${product.price}"/> - 
				<form action="product/${product.id}" method="POST">
    			<input type="hidden" name="_method" value="delete">
    			<input class="ml-3 btn btn-sm btn-danger" type="submit" value="Delete">
    			</form>
    		</div>
			</c:forEach>
		</div>
		</div>
		
		<div>
		<h1 class="border bg-secondary rounded text-center">Categories</h1>
		<div class="p-2 border bg-secondary rounded">
			<c:forEach var="category" items="${categories}">
			<div class="p-1 d-flex justify-content-between">
				<a href="/category/${category.id}">
				<c:out value="${category.name}"/></a>
				<form action="/category/${category.id}" method="POST">
    			<input type="hidden" name="_method" value="delete">
    			<input class="ml-3 btn btn-sm btn-danger" type="submit" value="Delete">
    			</form>
    		</div>	
			</c:forEach>
		</div>
		</div>
	</div>		

</body>
</html>