package com.joeljebitto.MacIdRegistryForExamEntry.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.joeljebitto.MacIdRegistryForExamEntry.Enitiy.Room;
import com.joeljebitto.MacIdRegistryForExamEntry.Service.RoomService;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class RoomRestController {

  private final RoomService roomService;

  @Autowired
  public RoomRestController(RoomService roomService) {
    this.roomService = roomService;
  }

  @GetMapping
  public List<Room> getAllRooms() {
    return roomService.getAllRooms();
  }

  @GetMapping("/{roomNo}")
  public ResponseEntity<Room> getRoomById(@PathVariable String roomNo) {
    return roomService.getRoomById(roomNo)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }
}
