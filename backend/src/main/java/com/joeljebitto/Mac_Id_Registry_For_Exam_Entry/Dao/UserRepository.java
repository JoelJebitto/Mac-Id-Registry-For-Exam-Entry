package com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
  Optional<User> findByUsername(String username);
}
