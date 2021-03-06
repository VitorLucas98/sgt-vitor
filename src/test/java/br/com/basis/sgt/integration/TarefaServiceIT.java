package br.com.basis.sgt.integration;

import br.com.basis.sgt.dtos.ResponsavelDTO;
import br.com.basis.sgt.dtos.TarefaDTO;
import br.com.basis.sgt.services.ResponsavelService;
import br.com.basis.sgt.services.TarefaService;
import br.com.basis.sgt.services.exceptions.ObjectNotFoundException;
import enums.StatusTarefa;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@SpringBootTest
@Transactional
public class TarefaServiceIT {

    @Autowired
    private TarefaService service;
    @Autowired
    private ResponsavelService responsavelService;

    private long idExistente;
    private long idNaoExistente;
    private int quantidadeTarefas;

    @BeforeEach
    void setUp() throws  Exception{
        idExistente = 2L;
        idNaoExistente = 1000L;
        quantidadeTarefas = 2;
    }

    @Test
    public void deleteDeveriaLancarObjectNotFoundExceptionCasoIdNaoExista(){
        Assertions.assertThrows(ObjectNotFoundException.class, ()->{
            service.delete(idNaoExistente);
        });
    }

    @Test
    public void deleteDeveriaNaoFazerNadaCasoIdExistente(){
        Assertions.assertDoesNotThrow(() ->{
            service.delete(idExistente);
        });
    }

    @Test
    public void findByIdDeveriaLancaObjectNotFoundExceptionCasoIdNaoExista(){
        Assertions.assertThrows(ObjectNotFoundException.class, () -> {
            service.findById(idNaoExistente);
        });
    }

    @Test
    public void findByIdDeveriaTrazerTarefaQuandoIdExiste(){
        TarefaDTO tarefaDTO = service.findById(idExistente);
        Assertions.assertNotNull(tarefaDTO);
    }

    @Test
    public void findAllPageDeveriaTrazerTarefas(){
        List<TarefaDTO> list = service.findAll();
        Assertions.assertFalse(list.isEmpty());
        Assertions.assertEquals(quantidadeTarefas, list.size());
    }
   @Test
    public void savarDeveriaPersistirNovaEntidadeComIdAutoIncrementavel(){
        TarefaDTO tarefaDTO = getTarefaDTO();
        tarefaDTO.setId(null);

        tarefaDTO = service.salvar(tarefaDTO);
        TarefaDTO result = service.findById(tarefaDTO.getId());

        Assertions.assertNotNull(tarefaDTO.getId());
    }
    private Long criaResponsavel() {
        ResponsavelDTO responsavelDTO = new ResponsavelDTO();
        responsavelDTO.setEmail("teste@gmail.com");
        responsavelDTO.setNome("teste");
        responsavelDTO.setTarefas(new ArrayList<>());
        ResponsavelDTO save = responsavelService.salvar(responsavelDTO);
        return save.getId();
    }

    private TarefaDTO getTarefaDTO() {
        TarefaDTO tarefaDTO = new TarefaDTO();
        tarefaDTO.setTitulo("T??tulo 1");
        tarefaDTO.setIdResponsavel(criaResponsavel());
        tarefaDTO.setDataInicial(LocalDateTime.now());
        tarefaDTO.setDataEfetiva(LocalDateTime.now());
        tarefaDTO.setDataPrevista(LocalDateTime.now());
        tarefaDTO.setComentarios(new ArrayList<>());
        tarefaDTO.setStatus(StatusTarefa.A_FAZER);
        tarefaDTO.setTipoTarefa("Lazer");
        return tarefaDTO;
    }

}
