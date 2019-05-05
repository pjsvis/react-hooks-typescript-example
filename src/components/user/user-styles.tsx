import styled from "styled-components";

export const Main = styled.main.attrs({
  className: "center sans-serif"
})``;

export const Article = styled.article.attrs({
  className: "w-100 bb b--black-10 shadow-4 pa2 mt2 flex items-center justify-between"
})``;

export const Image = styled.img.attrs({
  className: "ba b--black-10 db br-100 w2 w3-ns h2 h3-ns mr2"
})``;

export const Title = styled.h1.attrs({
  className: "f5 f5-ns fw6 lh-title black mv0"
})``;

export const SubTitle = styled.h2.attrs({
  className: "f5 fw4 mt0 mb0 black-60"
})``;

export const Button = styled.button.attrs({
  className: "f6 button-reset bg-white ba b--black-10  grow  pointer pv1 black-60",
  type: "button"
})``;
