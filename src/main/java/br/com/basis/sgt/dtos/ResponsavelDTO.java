package br.com.basis.sgt.dtos;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ResponsavelDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    @NotBlank(message = "Preenchimento invalido")
    private String nome;


    @Email(message = "Email inválido!")
    private String email;


    private List<TarefaDTO> tarefas;
}
