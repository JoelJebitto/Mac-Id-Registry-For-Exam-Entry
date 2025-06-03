package com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Utils;

import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.nio.charset.StandardCharsets;

@Component
public class JwtUtil {

  private final String SECRET_KEY = "yoursfsdfsjnsdfdfhdshsdfsfdhsjkfnasfnasdfnsdfhsahfhk-secret-key"; // use env or
                                                                                                       // config in real
                                                                                                       // apps

  public String generateToken(String username, String role) {
    return Jwts.builder()
        .setSubject(username)
        .claim("role", role)
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours validity
        .signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes(StandardCharsets.UTF_8))
        .compact();
  }

  public String extractUsername(String token) {
    return Jwts.parser()
        .setSigningKey(SECRET_KEY.getBytes(StandardCharsets.UTF_8))
        .parseClaimsJws(token)
        .getBody()
        .getSubject();
  }

  public boolean validateToken(String token, String username) {
    final String extractedUsername = extractUsername(token);
    return (extractedUsername.equals(username) && !isTokenExpired(token));
  }

  private boolean isTokenExpired(String token) {
    final Date expiration = Jwts.parser()
        .setSigningKey(SECRET_KEY.getBytes(StandardCharsets.UTF_8))
        .parseClaimsJws(token)
        .getBody()
        .getExpiration();
    return expiration.before(new Date());
  }
}
