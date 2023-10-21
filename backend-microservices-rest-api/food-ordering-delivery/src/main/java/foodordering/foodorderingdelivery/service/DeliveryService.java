package foodordering.foodorderingdelivery.service;

import foodordering.foodorderingdelivery.data.Delivery;
import foodordering.foodorderingdelivery.data.DeliveryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Nushan
 */
@Service
public class DeliveryService {
     @Autowired
    private DeliveryRepository deliveryRepository;
     
     public Delivery createDelivery (Delivery dlry){
        return deliveryRepository.save(dlry);
    }
    
    public List<Delivery> getAllDeliverys(){
       List<Delivery> dlry = deliveryRepository.findAll();
       return dlry;
    }
    
    public Delivery getDeliveryById(int id){
        Optional<Delivery> dlry = deliveryRepository.findById(id);
        return dlry.get();       
    }
    public Delivery updateDelivery (Delivery dlry){
        if (getDeliveryById(dlry.getId())!=null){
            return deliveryRepository.save(dlry);
        }
        else {
            return createDelivery(dlry);
        } 
    }
    
     public void deleteDelivery (Delivery dlry){
            deliveryRepository.delete(dlry);
    }
}
