package br.com.basis.sgt.dtos;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.basis.sgt.entities.Tarefa;


public class TarefaDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	@NotBlank(message = "Informe um titulo")
	private String titulo;
	
	@NotBlank(message = "Informe uma descrição")
	private String descricao;
	
	@Future(message = "A data deve ser do futuro !")
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime dataInicial;
	
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime dataFinal;

	public TarefaDTO() {
	}

	public TarefaDTO(Long id, String titulo, String descricao, LocalDateTime dataInicial,
			LocalDateTime dataFinal) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.descricao = descricao;
		this.dataInicial = dataInicial;
		this.dataFinal = dataFinal;
	}
	
	public TarefaDTO(Tarefa entity) {
		id = entity.getId();
		titulo = entity.getTitulo();
		descricao = entity.getDescricao();
		dataInicial = entity.getDataInicial();
		dataFinal = entity.getDataFinal();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public LocalDateTime getDataInicial() {
		return dataInicial;
	}

	public void setDataInicial(LocalDateTime dataInicial) {
		this.dataInicial = dataInicial;
	}

	public LocalDateTime getDataFinal() {
		return dataFinal;
	}

	public void setDataFinal(LocalDateTime dataFinal) {
		this.dataFinal = dataFinal;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TarefaDTO other = (TarefaDTO) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
}
