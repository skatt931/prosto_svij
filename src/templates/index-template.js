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
    width: auto;
    height: 50px;
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
