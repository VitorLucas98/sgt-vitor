package br.com.basis.sgt.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import enums.StatusTarefa;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity(name = "Tb_tarefa")
public class Tarefa implements Serializable {
	private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String titulo;

	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private LocalDateTime dataInicial;

	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private LocalDateTime dataPrevista;

	@Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private LocalDateTime dataEfetiva;

	private StatusTarefa status;

	private String tipoTarefa;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_tarefa")
	private List<Comentario> comentarios;

	@JsonManagedReference
	@ManyToOne
	@JoinColumn(name = "id_responsavel")
	private Responsavel responsavel;
}
