package com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Entity;

import java.util.ArrayList;
import java.util.List;

import com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Entity.Enum.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity(name = "app_user")
public class User {

  @Id
  private String username;

  private String password;

  @Enumerated(EnumType.STRING)
  private Role role;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Exam> exams = new ArrayList<>();

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

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  public List<Exam> getExams() {
    return exams;
  }

  public void setExams(List<Exam> exams) {
    this.exams = exams;
  }

  @Override
  public String toString() {
    return "User [username=" + username + ", password=" + password + ", role=" + role + ", exams=" + exams + "]";
  }

}
