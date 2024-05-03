package com.sp.Service;

import com.sp.Entity.Carte;
import com.sp.Repository.CarteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarteService {
    @Autowired
    private CarteRepository carteRepository;

    public List<Carte> getAllCarte() {
        return carteRepository.findAll();
    }
    public Carte saveCard(Carte card) {
        return carteRepository.save(card);
    }

}
