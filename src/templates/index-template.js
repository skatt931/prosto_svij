import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import styled from 'styled-components';
import StyledLink from '../components/styled-link';

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const intro = data.markdownRemark.html;
  const title = data.markdownRemark.frontmatter.title;

  const slisedPosts = posts.slice(0, 2);

  return (
    <Layout title={title}>
      <Intro
        dangerouslySetInnerHTML={{
          __html: intro,
        }}
      />

      <PostList posts={slisedPosts} />
      <StyledLink
        css={`
          display: block;
          margin-top: var(--size-800);
          margin-bottom: var(--size-800);
          margin-left: auto;
          margin-right: auto;
          width: fit-content;
        `}
        to="/blog"
      >
        Всі подкасти
      </StyledLink> 
    </Layout>
  );
};

export default HomePage;

const Intro = styled.div`
/* ----------------------------------------------
 * Generated by Animista on 2022-1-28 22:7:56
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation shake-bottom
 * ----------------------------------------
 */
 @-webkit-keyframes shake-bottom {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  10% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
            transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
}
@keyframes shake-bottom {
  0%,
  100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  10% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
  20%,
  40%,
  60% {
    -webkit-transform: rotate(-4deg);
            transform: rotate(-4deg);
  }
  30%,
  50%,
  70% {
    -webkit-transform: rotate(4deg);
            transform: rotate(4deg);
  }
  80% {
    -webkit-transform: rotate(-2deg);
            transform: rotate(-2deg);
  }
  90% {
    -webkit-transform: rotate(2deg);
            transform: rotate(2deg);
  }
}


 @-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(1.12);
            transform: scale(1.12);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(1.05);
            transform: scale(1.05);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.95);
            transform: scale(0.95);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}



  display: flex;
  flex-direction: column;
  max-width: 80ch;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: var(--size-800);
  margin-bottom: var(--size-900);
  text-align: center;

  /* font-family: sans-serif; */

  & p {
    /* text-transform: capitalize; */
    font-size: 1.15rem;
  }

  & .link-wrapper {
    display: inline-flex;
  }

  & a {
    display: inline-block;
    margin-right: var(--size-400);
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    .listen-us-link {
      height: 40px !important;
      width: 130px !important;
    }
  }
  & .link-wrapper {
    margin-bottom: var(--size-400);
  }

  & .ls1 {
    -webkit-animation: heartbeat 1.5s ease-in-out 3.1s both;
	  animation: heartbeat 1.5s ease-in-out 3.1s both;
  }
  & .ls2 {
    -webkit-animation: heartbeat 1.5s ease-in-out 3.2s both;
	  animation: heartbeat 1.5s ease-in-out 3.2s both;
  }
  & .ls3 {
    -webkit-animation: heartbeat 1.5s ease-in-out 3.3s both;
	  animation: heartbeat 1.5s ease-in-out 3.3s both;
  }
  & .ls4 {
    -webkit-animation: heartbeat 1.5s ease-in-out 3.4s both;
	  animation: heartbeat 1.5s ease-in-out 3.4s both;
  }
  & .ls5 {
    -webkit-animation: heartbeat 1.5s ease-in-out 3.5s both;
	  animation: heartbeat 1.5s ease-in-out 3.5s both;
  }
  
  & .listen-us-link {
    transition: 0.3s;
    display: inline-flex;
    height: 45px;
    width: 180px;
    & span {
      height: 100%;
      width: 100%;
      background-image: none;
      & span {
        background-image: none !important;
      }
      & img {
        border-radius: 9%;
      }
    }
  }

  & .listen-us-link.patreon-link {
    position: relative;
    margin-right: 0;
    width: auto;
    height: 50px;
    -webkit-animation: shake-bottom 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) 5s 1 both;
	  animation: shake-bottom 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) 5s 1 both;

  }



  & .listen-us-link:hover {
    transition: 0.3s;
    transform: scale(1.16667);
  }

  & img {
    max-height: 50px;
  }

  @media screen and (max-width: 700px) {
    & h1 {
      font-size: var(--size-700);
    }
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 9
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tags
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
