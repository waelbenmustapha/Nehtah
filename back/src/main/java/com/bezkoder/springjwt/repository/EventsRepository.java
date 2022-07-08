package com.bezkoder.springjwt.repository;

import com.bezkoder.springjwt.models.Events;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventsRepository extends JpaRepository<Events,Long> {
}
