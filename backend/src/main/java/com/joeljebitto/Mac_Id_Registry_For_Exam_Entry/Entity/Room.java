package com.joeljebitto.Mac_Id_Registry_For_Exam_Entry.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;

@Entity
public class Room {

  @Id
  private String roomno;

  private String name;

  private Integer capacity;

  private String description;

  @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<Exam> exams = new ArrayList<>();

  @Override
  public String toString() {
    return "Room [roomNo=" + roomno + ", name=" + name + ", capacity=" + capacity + ", description=" + description
        + ", exams=" + exams + "]";
  }

  public String getRoomNo() {
    return roomno;
  }

  public void setRoomNo(String roomNo) {
    this.roomno = roomNo;
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

  public List<Exam> getExams() {
    return exams;
  }

  public void setExams(List<Exam> exams) {
    this.exams = exams;
  }

}
