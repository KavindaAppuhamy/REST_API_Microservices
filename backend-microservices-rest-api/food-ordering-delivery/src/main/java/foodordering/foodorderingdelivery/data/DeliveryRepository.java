package foodordering.foodorderingdelivery.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Nushan
 */
@Repository
public interface DeliveryRepository extends JpaRepository<Delivery, Integer>{
    
}
