#query 1
#-----
SELECT name, language, percentage
FROM countries
LEFT JOIN languages ON countries.code=languages.country_code
WHERE language='slovene'
ORDER BY percentage DESC;

#query 2
#-----
SELECT countries.name, count(cities.id) AS cities_count #(SELECT COUNT(*) FROM cities WHERE countries.id = cities.country_id ) AS cities_count
FROM countries JOIN cities 
ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY cities_count DESC
;

#query 3
#-----
SELECT cities.name, cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE countries.name = 'mexico'
AND cities.population > 500000
ORDER BY cities.population DESC;

#query 4
#-----
SELECT countries.name, languages.language, languages.percentage
FROM countries
JOIN languages ON countries.id = languages.country_id
WHERE percentage > 80
ORDER BY languages.percentage DESC;

#query 5
#-----
SELECT countries.name, countries.surface_area, countries.population
FROM countries
WHERE surface_area < 501 && population > 100000
ORDER BY surface_area ASC;

#query 6
#-----
SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy
FROM countries
WHERE countries.government_form = 'Constitutional Monarchy' && countries.capital > 200 && countries.life_expectancy > 75;

#query 7
#-----
SELECT countries.name, cities.name, cities.district, cities.population
FROM countries
JOIN cities ON countries.id = cities.country_id
WHERE countries.name = 'Argentina' && cities.district = 'Buenos Aires';

#query 8
#-----
SELECT countries.name, count(cities.id) AS cities_count #(SELECT COUNT(*) FROM cities WHERE countries.id = cities.country_id ) AS cities_count
FROM countries JOIN cities 
ON countries.id = cities.country_id
GROUP BY countries.id
ORDER BY cities_count DESC

#query 9
#-----
SELECT countries.region, count(countries.id) AS countries_count 
FROM countries GROUP BY countries.region
ORDER BY countries_count DESC
