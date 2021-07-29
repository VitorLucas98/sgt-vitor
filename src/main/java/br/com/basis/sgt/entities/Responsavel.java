package br.com.basis.sgt.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity(name = "tb_responsavel")
public class Responsavel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nome;

	private String email;

	@OneToMany(mappedBy = "responsavel")
	private List<Tarefa> tarefas;
	

}
