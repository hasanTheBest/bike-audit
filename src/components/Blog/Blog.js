import React from "react";

const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-4xl my-8 text-center text-slate-500">Web 101</h2>

      {/* Context API */}
      <div className="mb-4">
        <h4 className="text-xl mb-4 text-slate-400">
          1. What is Context API in React
        </h4>
        <p className="mb-4">
          Context API in React is a way of sending data direct to the consumer
          component without props drilling or via intermediate components.
          Context API is a way for React App to effectively produce global
          variable that can be passed around.
        </p>

        <p className="mb-4">
          Context API is considered as an effective, easier and lighter approach
          for state management of a React App. Context is designed to consider
          in mind to store global data of React tree components. It is an
          efficient method of accepting global data without manually passing
          props down to the component tree.
        </p>
      </div>

      {/* Semantics */}
      <div className="mb-4 mt-4">
        <h4 className="text-xl mb-4 text-slate-400">
          2. What does it mean by semantic tag/element in HTML?
        </h4>
        <p className="mb-4">
          A semantic element is used to clearly describe its usages both for the
          browsers and developers. Usually sematic refers to the a piece of
          meaningful code that self descriptive and expose the role and purpose
          of usage of the code.
        </p>

        <p className="mb-4">
          Semantic elements or tags in modern HTML5 are audio, video,
          figcaption, figure, section, header, footer, main, summary, time,
          article, aside, details, nav. All the tags are self descriptive what
          can they do or what type of content they can contain.
        </p>
      </div>
    </div>
  );
};

export default Blog;
