package com.sp.Repository;

import com.sp.Entity.Carte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface CarteRepository extends JpaRepository<Carte, Long> { }
