package com.garageservice.og.entity;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="garage_tbl")
public class Garage {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "garage_name", nullable=false)
	private String garageName;
	
	@Column(name = "owner", nullable=false)
	private String owner;
	
	@Column(name = "email", nullable=false)
	private String email;
	
	@Column(name = "contact", nullable=false)
	private Long contact;
	
	@Column(name = "password", nullable=false)
	private String password;
	
	@Column(name = "location", nullable=false)
	private String location;
	
//	@Column(name="lat_long")
//	private String latAndLong;
	
	private Double latitude;
	
	private Double longitude;
	@Lob
	@Column(nullable = true)
	private String image;
	
	@Column(name = "category", nullable = true)
	private String category;

	
	

	public Garage(String garageName, String owner, String email, Long contact, String password, String location,
			Double latitude, Double longitude, String image, String category) {
		super();
		this.garageName = garageName;
		this.owner = owner;
		this.email = email;
		this.contact = contact;
		this.password = password;
		this.location = location;
		this.latitude = latitude;
		this.longitude = longitude;
		this.image = image;
		this.category = category;
	}



	public Garage(String garageName, String owner, String email, Long contact, String password, String location,
			String latAndLong, String image, String category) {
		super();
		this.garageName = garageName;
		this.owner = owner;
		this.email = email;
		this.contact = contact;
		this.password = password;
		this.location = location;
//		this.latAndLong = latAndLong;
		this.image = image;
		this.category = category;
	}



	public Garage(String garageName, String owner, String email,Long contact, String password, String location, String image, String category) {
		super();
		this.garageName = garageName;
		this.owner = owner;
		this.email = email;
		this.contact= contact;
		this.password = password;
		this.location = location;
		this.image = image;
		this.category = category;
	}
	
	

	public Garage(String garageName, String owner, String email,Long contact, String password, String location) {
		super();
		this.garageName = garageName;
		this.owner = owner;
		this.email = email;
		this.contact= contact;
		this.password = password;
		this.location = location;
	}



	public Garage(String garageName, String owner, String email,Long contact, String password, String location, String category) {
		super();
		this.garageName = garageName;
		this.owner = owner;
		this.email = email;
		this.contact= contact;
		this.password = password;
		this.location = location;
		this.category = category;
	}



	public Long getContact() {
		return contact;
	}



	public void setContact(Long contact) {
		this.contact = contact;
	}



	public Garage() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getGarageName() {
		return garageName;
	}

	public void setGarageName(String garageName) {
		this.garageName = garageName;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}



	public Double getLatitude() {
		return latitude;
	}



	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}



	public Double getLongitude() {
		return longitude;
	}



	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
	
	
}
