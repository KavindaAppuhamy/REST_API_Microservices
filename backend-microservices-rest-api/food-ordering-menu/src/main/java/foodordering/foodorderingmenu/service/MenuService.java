/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package foodordering.foodorderingmenu.service;

import foodordering.foodorderingmenu.data.Menu;
import foodordering.foodorderingmenu.data.MenuRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 *
 * @author Nushan
 */
@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;
    
    public Menu createMenu (Menu mnu){
        return menuRepository.save(mnu);
    }
    
    public List<Menu> getAllMenus(){
       List<Menu> mnu = menuRepository.findAll();
       return mnu;
    }
    
    public Menu getMenuById(int id){
        Optional<Menu> mnu = menuRepository.findById(id);
        return mnu.get();       
    }
    public Menu updateMenu (Menu mnu){
        if (getMenuById(mnu.getId())!=null){
            return menuRepository.save(mnu);
        }
        else {
            return createMenu(mnu);
        } 
    }
    
     public void deleteMenu (Menu mnu){
            menuRepository.delete(mnu);
    }
    
}
