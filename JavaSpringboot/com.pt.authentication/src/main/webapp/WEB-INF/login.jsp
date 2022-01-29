<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
    
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
</head>
<body>
    <h1>Login</h1>

    <form:form action="/login" method="post" modelAttribute="login">
        <div class="form-group">
            <label>Username:</label>
            <form:input path="userName" class="form-control" />
            <form:errors path="userName" class="text-danger" />
        </div>
        <div class="form-group">
            <label>Password:</label>
            <form:password path="password" class="form-control" />
            <form:errors path="password" class="text-danger" />
        </div>
        <input type="submit" value="login" class="btn btn-success" />
    </form:form>
    
    <h1><a href="/register">Register</a></h1>    
</body>
</html>