INSERT INTO department (id, name)
VALUES
(1, "Advisory"),
(2, "Auditing and Assurance"),
(3, "Tax and Compliance"),
(4, "Operations"),

INSERT INTO role (title, salary, department_id) 
VALUES
("TAS Director",205,000,1),
("ERM Director",185,000,1),
("Chief Risk Officer",305,000,2),
("IT Audit Director",250,000,2),
("Senior Tax Manager",250,000,3),
("Tax Manager",150,000,3),
("CEO",1,750,000,4),
("CFO"950,000,4),

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
("Kelly", "Smith",1, NULL),
("Danny", "Lowe",1, NULL),
("Paula", "Jones",2, NULL),
("Bill", "Stern",2, NULL),
("Marley", "Patterson",2, NULL),
("Ashley", "Lawrence",2, NULL),
(