/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package foodordering.foodorderingmenu.controller;

import foodordering.foodorderingmenu.data.Menu;
import foodordering.foodorderingmenu.service.MenuService;
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
public class MenuController {
    @Autowired
    private MenuService menuService;
    
    @PostMapping(path="/menus") 
    public Menu createMenu (@RequestBody Menu mnu){
        return menuService.createMenu(mnu);
    }
    
    @GetMapping(path="/menus")
    public List<Menu> getAllMenus(){
        List<Menu> mnu = menuService.getAllMenus();
        return mnu;
    }
    
    @GetMapping(path = "/menus/{id}")
    public Menu getMenuById(@PathVariable int id){
        return menuService.getMenuById(id);
    }
    
    @PutMapping("/menus/{id}")
	public ResponseEntity<Menu> updateMenu(@PathVariable int id, @RequestBody Menu menuDetails){
		Menu menu = menuService.getMenuById(id);
		
		menu.setTitle(menuDetails.getTitle());
		menu.setDescription(menuDetails.getDescription());
		menu.setPrice(menuDetails.getPrice());
		
		Menu updatedMenu = menuService.updateMenu(menu);
		return ResponseEntity.ok(updatedMenu);
	}
	
	// delete employee rest api
	@DeleteMapping("/menus/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMenu(@PathVariable int id){
		Menu menu = menuService.getMenuById(id);
		
		menuService.deleteMenu(menu);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
