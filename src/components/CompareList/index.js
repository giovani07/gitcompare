import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository, Icon } from './style';

const CompareList = ({
  repositories, removeRepo, updateRepo, updateLoading,
}) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
          <button type="button" className="remove" onClick={() => removeRepo(repository.id)}>
            ✖
          </button>
        </header>

        <ul>
          <li>
            <Icon className="fa fa-star" />
            {repository.stargazers_count}
            <small> stars</small>
          </li>
          <li>
            <Icon className="icon fa fa-code-fork" />
            {repository.forks_count}
            <small> forks</small>
          </li>
          <li>
            <Icon className="fa fa-question-circle" />
            {repository.open_issues_count}
            <small> issues</small>
          </li>
          <li>
            <Icon className="fa fa-clock-o" />
            {repository.lastCommit}
            <small> last commit</small>
          </li>
        </ul>

        <button
          type="button"
          className="update"
          onClick={() => updateRepo(`${repository.owner.login}/${repository.name}`, repository.id)}
        >
          <i id={`btUpdate-${repository.id}`} className="fa fa-rotate-right" />
        </button>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      lastCommit: PropTypes.string,
    }),
  ).isRequired,
  removeRepo: PropTypes.func.isRequired,
  updateRepo: PropTypes.func.isRequired,
  updateLoading: PropTypes.bool,
};

export default CompareList;
