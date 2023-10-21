/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package foodordering.foodorderingdelivery.controller;

import foodordering.foodorderingdelivery.data.Delivery;
import foodordering.foodorderingdelivery.service.DeliveryService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nushan
 */
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/v1/")
public class DeliveryController {
     
    @Autowired
    private DeliveryService deliveryService;
    
    @PostMapping(path="/deliverys") 
    public Delivery createDelivery (@RequestBody Delivery dlry){
        return deliveryService.createDelivery(dlry);
    }
    
    @GetMapping(path="/deliverys")
    public List<Delivery> getAllDeliverys(){
        List<Delivery> dlry = deliveryService.getAllDeliverys();
        return dlry;
    }
    
    @GetMapping(path="/deliverys/{id}")
    public Delivery getDeliveryById(@PathVariable int id){
        return deliveryService.getDeliveryById(id);
    }
    
    @PutMapping("/deliverys/{id}")
	public ResponseEntity<Delivery> updateDelivery(@PathVariable int id, @RequestBody Delivery deliveryDetails){
		Delivery delivery = deliveryService.getDeliveryById(id);
		
		delivery.setDescription(deliveryDetails.getDescription());
		delivery.setCustomer(deliveryDetails.getCustomer());
                delivery.setLocation(deliveryDetails.getLocation());
		delivery.setTotal(deliveryDetails.getTotal());
		delivery.setDriver(deliveryDetails.getDriver());
		
		Delivery updatedDelivery = deliveryService.updateDelivery(delivery);
		return ResponseEntity.ok(updatedDelivery);
	}
	
	// delete employee rest api
	@DeleteMapping("/deliverys/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDelivery(@PathVariable int id){
		Delivery delivery = deliveryService.getDeliveryById(id);
		
		deliveryService.deleteDelivery(delivery);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
