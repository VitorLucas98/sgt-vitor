package br.com.basis.sgt.dtos;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TarefaDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@EqualsAndHashCode.Include
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

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "TarefaDTO [id=" + id + ", titulo=" + titulo + ", descricao=" + descricao + ", dataInicial="
				+ dataInicial + ", dataFinal=" + dataFinal + "]";
	}
	
	
}
