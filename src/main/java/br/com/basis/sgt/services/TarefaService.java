package br.com.basis.sgt.services;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.basis.sgt.dtos.TarefaDTO;
import br.com.basis.sgt.entities.Tarefa;
import br.com.basis.sgt.repositories.TarefaRepository;
import br.com.basis.sgt.services.exceptions.ObjectNotFoundException;

@Service
public class TarefaService {

	@Autowired
	private TarefaRepository repository;

	@Autowired
	private ModelMapper modelMapper;
	
	@Transactional(readOnly = true)
	public TarefaDTO findById(Long id) {
		Optional<Tarefa> tarefa = repository.findById(id);
		Tarefa entity = tarefa.orElseThrow(() -> new ObjectNotFoundException("Tarefa não encontrada"));
		TarefaDTO dto = modelMapper.map(entity, TarefaDTO.class);
		return dto;
	}

	@Transactional(readOnly = true)
	public Page<TarefaDTO> findAllPage(Pageable pageable) {
		Page<Tarefa> list = repository.findAll(pageable);
		Page<TarefaDTO> pageDTO = list.map( t -> modelMapper.map(t, TarefaDTO.class));
		return pageDTO;
	}

	@Transactional
	public TarefaDTO insert(TarefaDTO dto) {
		Tarefa entity = new Tarefa();
		modelMapper.map(dto, Tarefa.class);
		entity = repository.save(entity);
		TarefaDTO tarefaDto = modelMapper.map(entity, TarefaDTO.class);
		return tarefaDto;
	}

	@Transactional
	public TarefaDTO update(TarefaDTO dto, Long id) {
		Tarefa entity = repository.findById(id).
				orElseThrow(() -> new ObjectNotFoundException("Tarefa não encontrada"));
		modelMapper.map(dto, Tarefa.class);
		entity = repository.save(entity);
		TarefaDTO tarefaDto = modelMapper.map(entity, TarefaDTO.class);
		return tarefaDto;
	}
		
	public void delete(Long id) {
		try {			
			repository.deleteById(id);
		}catch ( EmptyResultDataAccessException e) {
			throw new ObjectNotFoundException("Tarefa não encontrada");
		}	
	}
	
}
