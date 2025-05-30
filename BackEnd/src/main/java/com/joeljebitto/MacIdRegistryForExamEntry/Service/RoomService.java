package com.joeljebitto.MacIdRegistryForExamEntry.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joeljebitto.MacIdRegistryForExamEntry.Dao.RoomRepository;
import com.joeljebitto.MacIdRegistryForExamEntry.Enitiy.Room;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

  private final RoomRepository roomRepository;

  @Autowired
  public RoomService(RoomRepository roomRepository) {
    this.roomRepository = roomRepository;
  }

  public List<Room> getAllRooms() {
    return roomRepository.findAll();
  }

  public Optional<Room> getRoomById(String roomNo) {
    return roomRepository.findById(roomNo);
  }

}
