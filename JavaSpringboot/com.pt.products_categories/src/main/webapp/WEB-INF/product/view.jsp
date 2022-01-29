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

<body class="w-75 bg-dark">
	<a href="/" class="btn btn-lg btn-primary">Back</a>
	<div class="mt-5 container d-flex col justify-content-around">
		<div>
		<h1 class="border bg-secondary rounded text-center"><c:out value="${product.name}"/></h1>
		<div class="p-2 border bg-secondary rounded">
			<c:forEach var="categoryItem" items="${product.categories}">
			<div class="p-1 d-flex justify-content-between">
				<c:out value="${categoryItem.name}"/>
    		</div>
			</c:forEach>
		</div>
		</div>
		
		<div>
		<h1 class="border bg-secondary rounded text-center">Categories</h1>
		<div class="p-2 border bg-secondary rounded">
			<c:forEach var="categoryItem" items="${categories}">

			<div class="p-1 d-flex justify-content-between">
				<a href="/product/${product.id}/addTo/${categoryItem.id}">
				<c:out value="${categoryItem.name}"/></a>
    		</div>

			</c:forEach>
		</div>
		</div>
	</div>		

</body>
</html>