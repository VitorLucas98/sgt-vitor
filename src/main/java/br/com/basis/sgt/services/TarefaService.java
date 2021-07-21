package br.com.basis.sgt.services;

import java.util.Optional;

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

	@Transactional(readOnly = true)
	public TarefaDTO findById(Long id) {
		Optional<Tarefa> tarefa = repository.findById(id);
		Tarefa entity = tarefa.orElseThrow(() -> new ObjectNotFoundException("Tarefa não encontrada"));
		return new TarefaDTO(entity);
	}

	@Transactional(readOnly = true)
	public Page<TarefaDTO> findAllPage(Pageable pageable) {
		Page<Tarefa> list = repository.findAll(pageable);
		return list.map(x -> new TarefaDTO(x));
	}

	@Transactional
	public TarefaDTO insert(TarefaDTO dto) {
		Tarefa entity = new Tarefa();
		copyDtoToEntity(entity, dto);
		return new TarefaDTO(entity);
	}

	@Transactional
	public TarefaDTO update(TarefaDTO dto, Long id) {
		Tarefa entity = repository.findById(id).
				orElseThrow(() -> new ObjectNotFoundException("Tarefa não encontrada"));
		copyDtoToEntity(entity, dto);
		return new TarefaDTO(entity);
	}
	
	private void copyDtoToEntity(Tarefa entity, TarefaDTO dto) {
		entity.setTitulo(dto.getTitulo());
		entity.setDescricao(dto.getDescricao());
		entity.setDataInicial(dto.getDataInicial());
		entity.setDataFinal(dto.getDataFinal());
		entity = repository.save(entity);
	}
	
	
	public void delete(Long id) {
		try {			
			repository.deleteById(id);
		}catch ( EmptyResultDataAccessException e) {
			throw new ObjectNotFoundException("Tarefa não encontrada");
		}	
	}
	
}
