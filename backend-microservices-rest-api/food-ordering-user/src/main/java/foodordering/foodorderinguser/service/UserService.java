/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package foodordering.foodorderinguser.service;

import foodordering.foodorderinguser.data.User;
import foodordering.foodorderinguser.data.UserRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Nushan
 */
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public User createUser (User usr){
        return userRepository.save(usr);
    }
    
    public List<User> getAllUser(){
       List<User> usr = userRepository.findAll();
       return usr;
    }
    
    public User getUserById(int id){
        Optional<User> usr = userRepository.findById(id);
        return usr.get();       
    }
    
    
 
}
