package com.joeljebitto.MacIdRegistryForExamEntry.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import com.joeljebitto.MacIdRegistryForExamEntry.Security.AuthRequest;
import com.joeljebitto.MacIdRegistryForExamEntry.Security.AuthResponse;
import com.joeljebitto.MacIdRegistryForExamEntry.Security.JwtUtil;
import com.joeljebitto.MacIdRegistryForExamEntry.Service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

  @Autowired
  private AuthenticationManager authManager;

  @Autowired
  private JwtUtil jwtUtil;

  @Autowired
  private UserService userDetailsService;

  @PostMapping("/login")
  public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
    Authentication authentication = authManager.authenticate(
        new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

    UserDetails user = userDetailsService.loadUserByUsername(request.getUsername());
    String role = user.getAuthorities().iterator().next().getAuthority().replace("ROLE_", "");
    String token = jwtUtil.generateToken(user.getUsername(), role);

    return ResponseEntity.ok(new AuthResponse(token));
  }
}
