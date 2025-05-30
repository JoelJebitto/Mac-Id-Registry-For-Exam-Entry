package com.joeljebitto.MacIdRegistryForExamEntry.Enitiy;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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

  // Getters and setters

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

  @Override
  public String toString() {
    return "Room [roomNo=" + roomNo + ", name=" + name + ", capacity=" + capacity + ", description=" + description
        + "]";
  }

}
