package com.joeljebitto.MacIdRegistryForExamEntry.Security;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import
// org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.CorsConfigurationSource;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
// import java.util.List;
//
// @Configuration
// public class SecurityConfig {
//
// @Bean
// public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
// http
// .cors() // Enable CORS support
// .and()
// .csrf().disable() // Disable CSRF (adjust for your app)
// .authorizeHttpRequests()
// .anyRequest().permitAll(); // For testing, allow all requests
// return http.build();
// }
//
// @Bean
// public CorsConfigurationSource corsConfigurationSource() {
// CorsConfiguration config = new CorsConfiguration();
// config.setAllowedOrigins(List.of("http://localhost:5173/")); // frontend URL
// config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
// config.setAllowedHeaders(List.of("*"));
// config.setAllowCredentials(true);
//
// UrlBasedCorsConfigurationSource source = new
// UrlBasedCorsConfigurationSource();
// source.registerCorsConfiguration("/**", config);
// return source;
// }
// }
