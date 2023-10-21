package foodordering.foodorderingmenu.data;

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
@Table(name = "menus")
public class Menu {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "title")
	private String title;

	@Column(name = "description")
	private String description;
                        
	@Column(name = "price")
	private double price;
        
         public Menu() {
		
	}
         public Menu(String title, String description, double price) {
		super();
		this.title = title;
		this.description = description;
		this.price= price;
	}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
	
	
    
}
