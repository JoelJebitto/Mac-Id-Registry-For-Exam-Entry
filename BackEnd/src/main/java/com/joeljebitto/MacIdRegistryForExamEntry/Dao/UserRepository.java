package com.joeljebitto.MacIdRegistryForExamEntry.Dao;

import java.util.Optional;

import com.joeljebitto.MacIdRegistryForExamEntry.Enitiy.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByUsername(String username);
}
