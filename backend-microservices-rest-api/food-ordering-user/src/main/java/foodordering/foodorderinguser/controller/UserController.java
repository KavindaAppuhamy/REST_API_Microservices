package foodordering.foodorderinguser.controller;

import foodordering.foodorderinguser.data.User;
import foodordering.foodorderinguser.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Nushan
 */
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("/api/v1/")
public class UserController {
    @Autowired
    private UserService userService;
    
    @PostMapping(path="/users") 
    public User createUser (@RequestBody User usr){
        return userService.createUser(usr);
    }
    
    @GetMapping(path="/users")
    public List<User> getAllStudents(){
        List<User> usr = userService.getAllUser();
        return usr;
    }
    @GetMapping(path = "/users/{id}")
    public User getUserById(@PathVariable int id){
        return userService.getUserById(id);
    }
    
    
    

}
