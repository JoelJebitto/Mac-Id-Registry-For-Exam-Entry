package com.joeljebitto.MacIdRegistryForExamEntry.Enitiy;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;

@Entity
@Table(name = "rooms")
public class Room {

  @Id
  @Column(name = "roomno")
  private String roomNo;

  private String name;

  private Integer capacity;

  private String description;

  @OneToMany(mappedBy = "exams", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Exams> exams = new ArrayList<>();

  public String getRoomNo() {
    return roomNo;
  }

  public void setRoomNo(String roomNo) {
    this.roomNo = roomNo;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getCapacity() {
    return capacity;
  }

  public void setCapacity(Integer capacity) {
    this.capacity = capacity;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public List<Exams> getExams() {
    return exams;
  }

  public void setExams(List<Exams> exams) {
    this.exams = exams;
  }
}
