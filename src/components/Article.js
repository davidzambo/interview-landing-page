import React from 'react';

const Article = (props) => {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.content} <span className="text-green"><em>Tovább</em></span></p>
      <hr />
    </article>
  );
}

export default Article;