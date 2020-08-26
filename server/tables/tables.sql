use crm;

CREATE TABLE Country(
  country_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
  country_name VARCHAR(20)
);

CREATE TABLE Employees(
  e_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  e_name VARCHAR(30)
);

CREATE TABLE Email_Type(
  email_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email_type VARCHAR(1)
);

CREATE TABLE Customer(
  c_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  c_name VARCHAR(50),
  c_email VARCHAR(50),
  c_first_contact VARCHAR(15),
  c_sold BOOLEAN,
  c_country INT,
  c_owner INT,
  c_email_type INT,
  
  FOREIGN KEY(c_country) REFERENCES Country(country_id),
  FOREIGN KEY(c_owner) REFERENCES Employees(e_id),
  FOREIGN KEY(c_email_type) REFERENCES Email_Type(email_id)
);
