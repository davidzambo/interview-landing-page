import React from 'react';

const Article = (props) => {
  return (
    <article>
      <h3>{props.title}</h3>
      <div>{props.content} <span className="text-green"><em>Tovább</em></span></div>
      <hr />
    </article>
  );
}

export default Article;