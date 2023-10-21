package foodordering.foodorderingmenu.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Nushan
 */
@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {
    
}
