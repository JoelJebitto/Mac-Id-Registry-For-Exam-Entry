package com.joeljebitto.MacIdRegistryForExamEntry.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.joeljebitto.MacIdRegistryForExamEntry.Enitiy.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, String> {
  // Additional query methods (if any) can be defined here
}
