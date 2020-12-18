import React, { Component } from "react";
// import PropTypes from "prop-types";

import Searchbar from "./searchbar/Searchbar";
import StartLayout from "./startLayout/StartLayout";
import ImageGallery from "./imageGallery/ImageGallery";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import Button from "./button/Button";
import Modal from "./modal/Modal";
import Spiner from "./loader/Loader";

import fetchWithQuery from "../utils/imageApi";

export default class App extends Component {
  // static propTypes = {
  //   state: {
  //     images: PropTypes.array,
  //     spiner: PropTypes.bool.isRequired,
  //     error: PropTypes.string,
  //     searchQuery: PropTypes.string,
  //     page: PropTypes.number.isRequired,
  //     largeImageURL: bool.isRequired,
  //   },
  // };
  state = {
    images: [],
    spiner: false,
    error: "",
    searchQuery: "",
    page: 1,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, largeImageURL } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchArticles();
    }
    if (largeImageURL) {
      window.addEventListener("keydown", this.handleKeyEsc);
    }
    if (!largeImageURL) {
      window.removeEventListener("keydown", this.handleKeyEsc);
    }
  }

  fetchArticles = () => {
    const { searchQuery, page } = this.state;
    this.setState({ spiner: true });
    fetchWithQuery(searchQuery, page)
      .then((response) => {
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...response],
            page: prevState.page + 1,
            spiner: false,
          };
        });
        if (this.state.page > 2) {
          this.handleScroll();
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ spiner: false }));
  };

  submit = (query) => {
    this.setState({
      searchQuery: query,
      images: [],
      page: 1,
    });
  };
  handleModal = (url) => {
    this.setState({ largeImageURL: url.target.dataset.url });
  };
  handleKeyEsc = (e) => {
    if (e.code === "Escape") {
      this.setState({ largeImageURL: null });
    }
  };
  handleClick = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.setState({
        largeImageURL: null,
      });
    }
  };
  handleScroll = (e) => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { images, spiner, largeImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.submit} />
        {images.length === 0 && <StartLayout />}
        {images.length > 0 && (
          <ImageGallery>
            {images.map((image) => (
              <ImageGalleryItem
                key={image.id}
                img={image.webformatURL}
                alt={image.tag}
                large={image.largeImageURL}
                onHandleModal={this.handleModal}
              />
            ))}
          </ImageGallery>
        )}
        {spiner && <Spiner />}
        {images.length > 0 && !spiner && (
          <Button onClick={this.fetchArticles} />
        )}
        {largeImageURL && (
          <Modal img={largeImageURL} onHandleClick={this.handleClick} />
        )}
      </>
    );
  }
}
