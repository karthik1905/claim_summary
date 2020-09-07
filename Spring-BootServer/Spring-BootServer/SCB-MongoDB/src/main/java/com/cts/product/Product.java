package com.cts.product;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Product {
	
	// private Object id;
	// private String name;
	// private String description;
	// private double price;
	@Id
	private String claimNumber;
	private String empId;
	private String empName;
	private String claimType;
	private String claimPrograms;
    private String startDate;
	private String endDate;
	
	// public Object getId() {
	// 	return id;
	// }
	// public void setId(Object id) {
	// 	this.id = id;
	// }
	// public String getName() {
	// 	return name;
	// }
	// public void setName(String name) {
	// 	this.name = name;
	// }
	// public String getDescription() {
	// 	return description;
	// }
	// public void setDescription(String description) {
	// 	this.description = description;
	// }
	// public double getPrice() {
	// 	return price;
	// }
	// public void setPrice(double price) {
	// 	this.price = price;
	// }

	public String getClaimNumber() {
		return claimNumber;
	}
	public void setClaimNumber(String claimNumber) {
		this.claimNumber = claimNumber;
	}
	public String getEmpId() {
		return empId;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmpName() {
		return empName;
	}
	public String getclaimType() {
		return claimType;
	}
	public void setClaimType(String claimType) {
		this.claimType = claimType;
	}
	public String getclaimPrograms() {
		return claimPrograms;
	}
	public void setClaimPrograms(String claimPrograms) {
		this.claimPrograms = claimPrograms;
	}

	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	
	
	

}
