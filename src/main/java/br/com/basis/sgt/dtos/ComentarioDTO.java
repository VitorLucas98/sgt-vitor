package br.com.basis.sgt.dtos;

import lombok.*;

import java.io.Serializable;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class ComentarioDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String texto;
}
