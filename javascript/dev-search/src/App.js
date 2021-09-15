console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        this.setState({ data: null, loading: false })
        
        api.fetchCats(keyword)
        .then(({data}) => this.setState({ data, loading: true }))
        .catch(e => console.warn(e));
      },
      onRandomSearch: () => {
        this.setState({ data: null, loading: false })
        
        api.randomCats()
        .then(({data}) => this.setState({ data, loading: true }))
        .catch(e => console.warn(e));
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        api.getCatStat(image.id)
        .then(({data}) => this.setState({ visible: true, image, exData: data }))
        .catch(e => console.warn(e));
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      },
      getStatus: null
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
