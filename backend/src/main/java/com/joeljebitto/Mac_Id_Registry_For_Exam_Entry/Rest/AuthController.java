package com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Rest;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Dao.UserRepository;
import com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Entity.User;
import com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Entity.Enum.Role;
import com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Service.UserDetailsServiceImpl;
import com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Utils.JwtUtil;

@RestController
@RequestMapping("/auth")
public class AuthController {

  private final AuthenticationManager authManager;
  private final JwtUtil jwtUtil;
  private final UserDetailsServiceImpl userDetailsService;
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public AuthController(AuthenticationManager authManager, JwtUtil jwtUtil,
      UserDetailsServiceImpl uds, UserRepository userRepository,
      PasswordEncoder passwordEncoder) {
    this.authManager = authManager;
    this.jwtUtil = jwtUtil;
    this.userDetailsService = uds;
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  @PostMapping("/register")
  public String register(@RequestBody RegisterRequest request) {
    if (userRepository.findByUsername(request.getUsername()).isPresent()) {
      return "User already exists";
    }

    User user = new User();
    user.setUsername(request.getUsername());
    user.setPassword(passwordEncoder.encode(request.getPassword()));

    // Convert role String to your Role enum safely
    try {
      Role roleEnum = Role.valueOf(request.getRole().toUpperCase());
      user.setRole(roleEnum);
    } catch (IllegalArgumentException e) {
      return "Invalid role provided";
    }

    userRepository.save(user);
    return "User registered successfully";
  }

  @PostMapping("/login")
  public String login(@RequestBody AuthRequest request) {
    System.err.println(request.toString());
    try {
      authManager.authenticate(
          new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
      var userDetails = userDetailsService.loadUserByUsername(request.getUsername());
      var user = userRepository.findByUsername(request.getUsername()).get();
      return jwtUtil.generateToken(user.getUsername(), user.getRole().name());
    } catch (Exception e) {
      throw new RuntimeException("Invalid credentials :" + e);
    }
  }
}

class RegisterRequest {

  private String username;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  private String password;

  private String role;

}

class AuthRequest {
  private String username;

  private String password;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  @Override
  public String toString() {
    return "AuthRequest [username=" + username + ", password=" + password + "]";
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  // getters and setters
}
