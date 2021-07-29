package br.com.basis.sgt.entities;

import enums.StatusTarefa;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;


@Data
@Entity(name = "Tb_tarefa")
public class Tarefa implements Serializable {
	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String titulo;

	private LocalDateTime dataInicial;

	private LocalDateTime dataPrevista;

	private LocalDateTime dataEfetiva;

	private StatusTarefa status;

	private String tipoTarefa;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_tarefa")
	private List<Comentario> comentarios;

	@ManyToOne
	@JoinColumn(name = "id_responsavel")
	private Responsavel responsavel;
}
