package foodordering.foodorderingdelivery.data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Nushan
 */

@Entity
@Table(name = "deliverys")
public class Delivery {
    
     @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "description")
	private String description;
        
        @Column(name = "customer")
	private String customer;

	@Column(name = "location")
	private String location;
                        
	@Column(name = "total")
	private double total;
        
        @Column(name = "driver")
	private String driver;

    public Delivery() {
		
	}
         public Delivery(String description, String customer, String location , double total, String driver) {
		super();
		this.description = description;
		this.customer = customer;
                this.location = location;
		this.total = total;
		this.driver = driver;
	}
        
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public String getDriver() {
        return driver;
    }

    public void setDriver(String driver) {
        this.driver = driver;
    }
        
}
