package br.com.basis.sgt.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import enums.StatusTarefa;
import lombok.Data;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

@Data
public class TarefaDTO {
	

	private Long id;
	
	@NotBlank(message = "Informe um titulo")
	private String titulo;

	@Future(message = "A data deve ser do futuro !")
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime dataInicial;

	@Future(message = "A data deve ser do futuro !")
	@JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime dataPrevista;

	@JsonFormat(pattern = "dd/MM/yyyy HH:mm")
	private LocalDateTime dataEfetiva;

	private String tipoTarefa;

	private StatusTarefa status;

	private List<ComentarioDTO> comentarios;

	private Long idResponsavel;
}
