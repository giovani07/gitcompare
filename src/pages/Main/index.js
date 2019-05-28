import React, { Component } from 'react';

import moment from 'moment';
import logo from '../../assets/logo.png';
import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    loading: false,
    repoError: false,
    repoInput: '',
    repositories: [],
  };

  async componentDidMount() {
    if (localStorage.length > 0) {
      this.setState({
        loading: true,
        repositories: await JSON.parse(localStorage.getItem('repositories')),
      });

      this.setState({ loading: false });
    }
  }

  /** Adiciona repositórios */
  handleAddRepo = async (x) => {
    x.preventDefault();

    const { repoInput, repositories } = this.state;

    try {
      const { data } = await api.get(`${repoInput}`);

      data.lastCommit = moment(data.pushed_at).fromNow();

      this.setState({
        loading: true,
        repoInput: '',
        repositories: [...repositories, data],
        repoError: false,
      });

      // Salva no localStorage
      localStorage.setItem('repositories', JSON.stringify([...repositories, data]));
    } catch (err) {
      this.setState({ repoError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  /** Remove repositórios */
  handleRemoveRepo = async (id) => {
    // Lista de repositórios atual
    const { repositories } = this.state;

    // Lista com repositório removido
    const remList = repositories.filter(item => item.id !== id);

    this.setState({ repositories: remList });
    // Atualiza o localStorage com a lista recém atualizada (const repositories, já formatada)
    localStorage.setItem('repositories', JSON.stringify(repositories));
  };

  /** Atualiza repositórios */
  handleUpdateRepo = async (repoAtual, id) => {
    const { repositories } = this.state;

    try {
      // Anima botão de Update
      const btLoading = document.querySelector(`#btUpdate-${id}`);
      btLoading.classList.add('fa-spin');

      const { data } = await api.get(`${repoAtual}`);

      data.lastCommit = moment(data.pushed_at).fromNow();

      this.setState({
        // updateLoading: true,
        /*
         * function map:
         * nomearrays.map(function(itens, index){
         *  return itens * 2;
         * })
         * nomearrays.map(itens => itens * 2)
         *
         * map percorre cada um dos itens do array e o resultado é um return de tudo.
         * se o item do array tiver id igual ao id que vem da api, retorna o novo data,
         * senão, o próprio item do array. Ao final remonta toda a sequência para o setState
         */
        repositories: await repositories.map(item => (item.id === data.id ? data : item)),
      });
      btLoading.classList.remove('fa-spin');

      // Atualize localStorage
      localStorage.setItem('repositories', JSON.stringify(repositories));
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      repoInput, repoError, loading, repositories, updateLoading,
    } = this.state;
    return (
      <Container>
        <img src={logo} alt="Github Compare" />
        <Form withError={repoError} onSubmit={this.handleAddRepo}>
          <input
            type="text"
            placeholder="usuário/respositório"
            value={repoInput}
            onChange={e => this.setState({ repoInput: e.target.value })}
          />
          <button type="submit">{loading ? <i className="fa fa-spinner fa-pulse" /> : 'Ok'}</button>
        </Form>
        {/** Manda variáveis para dentro das listas */}
        <CompareList
          repositories={repositories}
          removeRepo={this.handleRemoveRepo}
          updateRepo={this.handleUpdateRepo}
          updateLoading={updateLoading}
        />
      </Container>
    );
  }
}
