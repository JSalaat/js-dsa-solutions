-- SQL Employee Salaries
-- Your table: maintable_3CN7U

-- MySQL version: 8.0.23

-- In this MySQL challenge, your query should return the information for the employee with the third highest salary. Write a query that will find this employee and return that row, but then replace the DivisionID column with the corresponding DivisionName from the table cb_companydivisions. You should also replace the ManagerID column with the ManagerName if the ID exists in the table and is not NULL.

-- Your output should look like the following table.


/*
  write your SQL query below
  to run only a specific line press CTRL + Enter 
*/

-- SELECT ID, Name, DivisionName, ManagerName, Salary FROM maintable_3CN7U m
-- left join cb_companydivisions on m.DivisionID=cb_companydivisions.id
-- join maintable_3CN7U on m.ManagerID=m.ID
-- order by Salary DESC

WITH RankedEmployees AS (
    SELECT 
        ID,
        Name,
        DivisionID,
        ManagerID,
        Salary,
        ROW_NUMBER() OVER (ORDER BY Salary DESC) AS SalaryRank
    FROM maintable_3CN7U
)
SELECT
    RE.ID AS ID,
    RE.Name,
    COALESCE(cd.DivisionName, 'N/A') AS DivisionName,
    COALESCE(m.Name, 'N/A') AS ManagerName,
    RE.Salary AS Salary
FROM RankedEmployees RE
LEFT JOIN cb_companydivisions cd ON RE.DivisionID = cd.ID 
INNER JOIN RankedEmployees AS m ON RE.ManagerID = m.ID 
WHERE RE.SalaryRank = 3;