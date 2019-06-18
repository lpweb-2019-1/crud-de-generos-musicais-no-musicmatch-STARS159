import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { Router } from '@angular/router';

/**
 * O componente `GeneroListaComponent` implementa funcionalidades de
 * gerenciamento de Generos:
 * 
 * * lista (consulta)
 * * exclusão (após confirmação do usuário)
 * * acesso à funcionalidade de edição (componente [`EditarGeneroComponent`]{@link EditarGeneroComponent})
 */
@Component({
  selector: 'app-genero-lista',
  templateUrl: './genero-lista.component.html',
  styleUrls: ['./genero-lista.component.css']
})
export class GeneroListaComponent implements OnInit {
  /** A lista de Generos */
  generos = null;

  /** Uma variável de controle sobre o resultado da exclusão de Genero */
  resultadoExcluir = null;

  /**
   * O construtor injeta uma instância de `GenerosService` e `Router`
   * 
   * @param generos$ Uma instância de `GenerosService`
   * @param router Uma instância de `Router`
   */
  constructor(private generos$: GenerosService, private router: Router) { }

  /**
   * É sobrecarregado para acessar a lista de Generos quando o componente for iniciado.
   */
  ngOnInit() {
    this.atualizarLista();
  }

  /**
   * Este método usa o serviço `GenerosService` para obter a lista de Generos. 
   * Quando houver retorno, armazena o resultado no atributo `generos`.
   */
  atualizarLista() {
    this.generos$.lista()
      .subscribe(
        lista => this.generos = lista.results
      );
  }

  /**
   * Este método exclui um Genero, de acordo com confirmação do usuário. Ao excluir, atualiza a lista de Generos.
   * 
   * @param genero O Genero que será excluído
   */
  excluir(genero) {
    if (confirm(`Tem certeza que deseja excluir o genero "${genero.nome}" ?\nEssa ação não é reversível!`)) {
      this.generos$.excluir(genero.id)
        .subscribe(
          _ => {
            this.resultadoExcluir = true;
            this.atualizarLista();
          },
          err => {
            this.resultadoExcluir = err.error;
          }
        )
    }
  }

  /**
   * Este método realiza navegação para a funcionalidade de edição do genero.
   * 
   * @param genero O genero que será editado
   */
  editar(genero) {
    this.router.navigate(['generos', genero.id, 'editar']);
  }

  /**
   * Este método realiza navegação para a funcionalide de consulta do genero.
   * 
   * @param genero O genero que será consultado
   */
  consultar(genero) {
    this.router.navigate(['generos', genero.id]);
  }
}
