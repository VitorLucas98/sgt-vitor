package br.com.basis.sgt.services;

import br.com.basis.sgt.dtos.ResponsavelDTO;
import br.com.basis.sgt.entities.Responsavel;
import br.com.basis.sgt.mapstruct.ResponsavelMapper;
import br.com.basis.sgt.repositories.ResponsavelRepository;
import br.com.basis.sgt.services.exceptions.ObjectNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ResponsavelService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ResponsavelService.class);

    @Autowired
    private ResponsavelRepository repository;

    @Autowired
    private ResponsavelMapper responsavelMapper;

    @Transactional(readOnly = true)
    public ResponsavelDTO findById(Long id) {
        Optional<Responsavel> responsavel = repository.findById(id);
        Responsavel entity = responsavel.orElseThrow(() -> new ObjectNotFoundException("Responsavel não encontrado"));
        ResponsavelDTO dto = responsavelMapper.ToDto(entity);
        return dto;
    }

    @Transactional(readOnly = true)
    public Page<ResponsavelDTO> findAllPage(Pageable pageable) {
        Page<Responsavel> list = repository.findAll(pageable);
        Page<ResponsavelDTO> pageDTO = list.map( r -> responsavelMapper.ToDto(r));
        return pageDTO;
    }

    @Transactional
    public ResponsavelDTO salvar(ResponsavelDTO dto) {
        Responsavel entity = responsavelMapper.ToEntity(dto);
        entity = repository.save(entity);
        LOGGER.info(entity.toString());
        ResponsavelDTO responsavelDTO = responsavelMapper.ToDto(entity);
        return responsavelDTO;
    }


    public void delete(Long id) {
        try {
            repository.deleteById(id);
        }catch ( EmptyResultDataAccessException e) {
            throw new ObjectNotFoundException("Responsavel não encontrado");
        }
    }

}
