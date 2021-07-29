package br.com.basis.sgt.dtos;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
public class ResponsavelDTO {

    private Long id;

    @NotBlank(message = "Preenchimento invalido")
    private String nome;

    @Email(message = "Email inválido!")
    private String email;

    private List<TarefaDTO> tarefas;
}
