import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { ValicacaoFormUtilService } from '../valicacao-form-util.service';

@Component({
  selector: 'app-cadastrar-genero',
  templateUrl: './cadastrar-genero.component.html',
  styleUrls: ['./cadastrar-genero.component.css']
})
export class CadastrarGeneroComponent implements OnInit {
  /** Atributo vinculado ao campo do nome do genero */
  nome = null;

  /** Atributo vinculado ao campo da foto do genero */
  foto = null;

  /**
   * O construtor inje ainstâncias de `GenerosService` e `ValidacacaoFormUtilService`
   * 
   * @param generos$ Uma instância de generosService
   * @param validacao$ Uma instancia de ValidacacaoFormUtilService
   */
  constructor(private generos$: GenerosService,
    private validacao$: ValicacaoFormUtilService) { }

  ngOnInit() {
  }

  /**
   * Este método utiliza o método [`cadastrar()`]{@link generosService#cadastrar}
   * para cadastrar um genero, utilizando os atributos `nome` e `foto`.
   * 
   * Quando obtiver um resultado do método, faz um tratamento para lidar com situação
   * de erro ou sucesso.
   */
  salvar() {
    this.generos$.cadastrar(this.nome, this.foto)
      .subscribe(
        data => this.validacao$.erro = false,
        err => this.validacao$.erro = err.error
      );
  }

  /**
   * Este método é utilizado como tratador para o evento `change` do campo
   * foto. Quando o usuário selecionar um arquivo, este método será chamado
   * para obter o primeiro arquivo da lista (parâmetro `files`) e utilizá-lo
   * como a foto do genero.
   * 
   * @param files Lista de arquivos
   */
  onChangeFoto(files: FileList) {
    const fileItem = files.item(0);
    this.foto = fileItem;
  }

}
