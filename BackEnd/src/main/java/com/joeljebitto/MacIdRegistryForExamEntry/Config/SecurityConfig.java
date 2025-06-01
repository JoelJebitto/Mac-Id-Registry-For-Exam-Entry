
package com.joeljebitto.MacIdRegistryForExamEntry.Config;

import com.joeljebitto.MacIdRegistryForExamEntry.Security.JwtFilter;
import com.joeljebitto.MacIdRegistryForExamEntry.Service.UserService;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {

  private final JwtFilter jwtFilter;
  private final UserService userDetailsService;

  public SecurityConfig(JwtFilter jwtFilter, UserService userDetailsService) {
    this.jwtFilter = jwtFilter;
    this.userDetailsService = userDetailsService;
  }

  @Bean
  public AuthenticationManager authManager(AuthenticationConfiguration config) throws Exception {
    return config.getAuthenticationManager();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf().disable()
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/api/auth/**").permitAll()
            .requestMatchers("/api/rooms/**").hasRole("STUDENT")
            // .requestMatchers("/api/rooms").hasRole("STUDENT")
            // .requestMatchers("/api/rooms/").hasRole("STUDENT")
            .requestMatchers("/teacher/**").hasRole("TEACHER")
            .anyRequest().authenticated())
        .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

    return http.build();
  }
}
