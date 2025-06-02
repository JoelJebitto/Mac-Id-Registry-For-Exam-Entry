package com.joeljebitto.MacIdRegistryForExamEntry.Enitiy;

import java.beans.Transient;
import java.time.Duration;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joeljebitto.MacIdRegistryForExamEntry.Enitiy.Enum.ExamStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Exams {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "user")
  private User user;

  private String title;

  @Enumerated(EnumType.STRING)
  private ExamStatus status;

  @JsonFormat(pattern = "HH:mm")
  private Duration duration;

  @JsonFormat(pattern = "HH:mm")
  private LocalTime startTime;

  @JsonFormat(pattern = "HH:mm")
  private LocalTime endTime;

  @ManyToOne
  @JoinColumn(name = "room")
  private Room room;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public ExamStatus getStatus() {
    return status;
  }

  public void setStatus(ExamStatus status) {
    this.status = status;
  }

  public Duration getDuration() {
    return duration;
  }

  public void setDuration(Duration duration) {
    this.duration = duration;
  }

  public LocalTime getStartTime() {
    return startTime;
  }

  public void setStartTime(LocalTime startTime) {
    this.startTime = startTime;
  }

  public LocalTime getEndTime() {
    return endTime;
  }

  public void setEndTime(LocalTime endTime) {
    this.endTime = endTime;
  }

  public Room getRoom() {
    return room;
  }

  public void setRoom(Room room) {
    this.room = room;
  }

}
