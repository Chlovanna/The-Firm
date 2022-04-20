INSERT INTO departments (id, name)
VALUES
(1, "Advisory"),
(2, "Auditing and Assurance"),
(3, "Tax and Compliance"),
(4, "Operations");

INSERT INTO roles (id, title, salary, department_id) 
VALUES
(1,"TAS Director",205000,1),
(2,"ERM Director",185000,1),
(3,"Chief Risk Officer",305000,2),
(4,"IT Audit Director",250000,2),
(5,"Senior Tax Manager",250000,3),
(6,"Tax Manager",150000,3),
(7,"CEO",1750000,4),
(8,"CFO"950000,4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id) 
VALUES
(1,"Kelly", "Smith",1, NULL),
(2,"Danny", "Lowe",1, 1),
(3,"Paula", "Jones",2, 2),
(4,"Bill", "Stern",2, 3),
(5,"Marley", "Patterson",2, NULL),
(6,"Ashley", "Lawrence",2, NULL);